import { useEffect, useState } from "react";
import { fetchStats } from "../api/urlService";
import { useLogger } from "../context/LoggerContext";

export default function StatsPage({ clientId, clientSecret }) {
  const { log } = useLogger();
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats(clientId, clientSecret);
        setStats(data);
        log("Stats fetched", data);
      } catch (err) {
        log("Error fetching stats", err);
      }
    };
    loadStats();
  }, []);

  return (
    <div>
      <h2>Shortened URLs Statistics</h2>
      {stats.map(stat => (
        <div key={stat.shortUrl}>
          <p><strong>Short URL:</strong> {stat.shortUrl}</p>
          <p><strong>Clicks:</strong> {stat.clicks}</p>
          <p><strong>Created At:</strong> {stat.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
