import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOriginalUrl } from "../api/urlService";

export default function RedirectHandler() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const response = await fetchOriginalUrl(shortCode);
        if (response.originalUrl) {
          window.location.href = response.originalUrl;
        } else {
          navigate("/");
        }
      } catch {
        navigate("/");
      }
    };

    fetchAndRedirect();
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
}
