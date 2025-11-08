const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export async function getTradingData() {
  const res = await fetch(`${API_BASE_URL}/api/trading-data`);
  if (!res.ok) {
    throw new Error("Failed to fetch trading data");
  }
  return res.json();
}
