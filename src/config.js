import dotenv from "dotenv";
dotenv.config();

export const WEBHOOK_URL = process.env.WEBHOOK_URL || null;
export const FETCH_INTERVAL = parseInt(process.env.FETCH_INTERVAL || "60000");
export const MIN_MAGNITUDE = parseFloat(process.env.MIN_MAGNITUDE || "0");

// ✅ WEBHOOK_URL bersifat opsional: jika tidak diisi, monitor tetap berjalan
// (update README & riwayat) namun melewati pengiriman notifikasi Discord.
if (!WEBHOOK_URL) {
  console.warn("⚠️  WEBHOOK_URL tidak diisi. Notifikasi Discord dinonaktifkan.");
}
