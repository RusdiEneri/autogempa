import dotenv from "dotenv";
dotenv.config();

export const WEBHOOK_URL = process.env.WEBHOOK_URL;
export const FETCH_INTERVAL = parseInt(process.env.FETCH_INTERVAL || "60000");
export const MIN_MAGNITUDE = parseFloat(process.env.MIN_MAGNITUDE || "0");

if (!WEBHOOK_URL) {
  console.error("WEBHOOK_URL belum diisi di .env");
  process.exit(1);
}
