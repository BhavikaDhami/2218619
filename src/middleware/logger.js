const API_URL = "http://20.244.56.144/evaluation-service/logs";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiaGF2aWthZGhhbWkwMkBnbWFpbC5jb20iLCJleHAiOjE3NTI1NTc2ODIsImlhdCI6MTc1MjU1Njc4MiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjdhZWUxN2ZlLTY0ZTktNDFjNS1iY2RiLTdiZjljMGNlNmI0NyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImJoYXZpa2EiLCJzdWIiOiIyNmRlYTIwYS0yOTEwLTQyM2EtOTc3Yy1kMDQ1NDk5ZWU2ZDYifSwiZW1haWwiOiJiaGF2aWthZGhhbWkwMkBnbWFpbC5jb20iLCJuYW1lIjoiYmhhdmlrYSIsInJvbGxObyI6IjIyMTg2MTkiLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiIyNmRlYTIwYS0yOTEwLTQyM2EtOTc3Yy1kMDQ1NDk5ZWU2ZDYiLCJjbGllbnRTZWNyZXQiOiJKRUdVUHpncFJ2U0tzRXphIn0.yTw-zuYKfr4YwJtk6TScyADHIjR7B6Iglw3gbX_e0XU";  

export async function logEvent(stack, level, pkg, message) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,   
      },
      body: JSON.stringify({ stack, level, package: pkg, message }),
    });
  } catch (err) {
    console.error("Logging failed:", err);
  }
}
