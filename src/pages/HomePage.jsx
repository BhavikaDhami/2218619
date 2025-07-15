import { useState } from "react";
import { shortenUrl } from "../api/urlService";

const clientId = "26dea20a-2910-423a-977c-d045499ee6d6";
const clientSecret = "JEGUPzgpRvSKsEza";

export default function HomePage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [validityInMinutes, setValidityInMinutes] = useState(60);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!originalUrl) {
      setError("Please enter a URL");
      return;
    }
    try {
      const response = await shortenUrl(
        { originalUrl, validityInMinutes },
        clientId,
        clientSecret
      );
      setShortenedUrl(response.shortUrl);
      setError("");
    } catch {
      setError("Failed to shorten URL. Please check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter URL here"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Validity in minutes (default 60)"
        value={validityInMinutes}
        onChange={(e) => setValidityInMinutes(Number(e.target.value))}
        style={styles.input}
      />

      <button onClick={handleShorten} style={styles.button}>
        Shorten URL
      </button>

      {shortenedUrl && (
        <div style={styles.successBox}>
          Shortened URL:{" "}
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}

      {error && <div style={styles.errorBox}>{error}</div>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  successBox: {
    backgroundColor: "#D4EDDA",
    color: "#155724",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "4px",
  },
  errorBox: {
    backgroundColor: "#F8D7DA",
    color: "#721C24",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "4px",
  },
};
