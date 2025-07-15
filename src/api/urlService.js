import axios from "axios";

const API_BASE_URL = "https://open-short.up.railway.app/api/v1";

export const shortenUrl = async (data, clientId, clientSecret) => {
  const headers = { clientId, clientSecret };
  const response = await axios.post(`${API_BASE_URL}/url`, data, { headers });
  return response.data;
};

export const fetchStats = async (shortCode, clientId, clientSecret) => {
  const headers = { clientId, clientSecret };
  const response = await axios.get(`${API_BASE_URL}/url/stats/${shortCode}`, { headers });
  return response.data;
};

export const fetchOriginalUrl = async (shortCode) => {
  const response = await axios.get(`${API_BASE_URL}/url/${shortCode}`);
  return response.data;
};
