import { logEvent } from "../middleware/logger";   // ✅ Import logger

export async function shortenUrl(payload, clientId, clientSecret) {
  try {
    const response = await fetch(`http://20.244.56.144/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        clientId: clientId,
        clientSecret: clientSecret,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed to shorten URL");
    return await response.json();
  } catch (error) {
    logEvent(error.stack, "ERROR", "urlService", "API error in shortenUrl");
    throw error;
  }
}

export async function fetchStats(shortUrl, clientId, clientSecret) {
  try {
    const response = await fetch(`http://20.244.56.144/url/stats?shortUrl=${encodeURIComponent(shortUrl)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        clientId: clientId,
        clientSecret: clientSecret,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch URL stats");
    return await response.json();
  } catch (error) {
    logEvent(error.stack, "ERROR", "urlService", "API error in fetchStats");
    throw error;
  }
}
export async function fetchOriginalUrl(shortUrl, clientId, clientSecret) {
  try {
    const response = await fetch(`http://20.244.56.144/url?shortUrl=${encodeURIComponent(shortUrl)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        clientId: clientId,
        clientSecret: clientSecret,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch original URL");
    return await response.json();
  } catch (error) {
    logEvent(error.stack, "ERROR", "urlService", "API error in fetchOriginalUrl");
    throw error;
  }
}
