import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useLogger } from "../context/LoggerContext";
import { shortenUrl } from "../api/urlService";

export default function URLShortenerForm({ clientId, clientSecret, onShorten }) {
  const { log } = useLogger();
  const [form, setForm] = useState({ url: "", validity: 30, customCode: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^https?:\/\//.test(form.url)) {
      log("Invalid URL submitted", form.url);
      return alert("Invalid URL format");
    }
    try {
      const response = await shortenUrl({
        originalUrl: form.url,
        validityInMinutes: form.validity,
        customShortCode: form.customCode || undefined,
      }, clientId, clientSecret);
      log("URL shortened successfully", response);
      onShorten(response);
    } catch (err) {
      log("Error shortening URL", err);
      alert("Failed to shorten URL");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="URL" fullWidth onChange={e => setForm({ ...form, url: e.target.value })} />
      <TextField label="Validity (minutes)" type="number" fullWidth onChange={e => setForm({ ...form, validity: parseInt(e.target.value) })} />
      <TextField label="Custom Shortcode (Optional)" fullWidth onChange={e => setForm({ ...form, customCode: e.target.value })} />
      <Button type="submit" variant="contained">Shorten URL</Button>
    </form>
  );
}
