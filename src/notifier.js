import axios from "axios";
import { WEBHOOK_URL } from "./config.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendToDiscord(gempa) {
  // Tidak ada webhook yang dikonfigurasi → skip diam-diam
  if (!WEBHOOK_URL) return false;

  const color = gempa.magnitude >= 5 ? 16711680 : 16753920;

  const imageUrl = gempa.shakemap
    ? `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.shakemap}`
    : null;

  // ✅ Tampilkan baris "Dirasakan (MMI)" hanya jika tersedia
  const dirasakanLine = gempa.dirasakan
    ? `\n📡 **Dirasakan:** ${gempa.dirasakan}`
    : "";

  const payload = {
    embeds: [
      {
        title: "🚨 Gempa Terkini BMKG",
        description:
          `📍 **Wilayah:** ${gempa.wilayah}\n` +
          `🕒 **Waktu:** ${gempa.tanggal} ${gempa.jam}\n` +
          `📊 **Magnitude:** ${gempa.magnitude}\n` +
          `🌊 **Potensi:** ${gempa.potensi}\n` +
          `📏 **Kedalaman:** ${gempa.kedalaman}\n` +
          `🧭 **Koordinat:** ${gempa.koordinat}` +
          dirasakanLine,
        color,
        image: imageUrl ? { url: imageUrl } : undefined,
        footer: {
          text: "Sumber: BMKG",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const maxRetries = 3;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      await axios.post(WEBHOOK_URL, payload, { timeout: 15000 });
      console.log("Notifikasi terkirim ke Discord.");
      return true;
    } catch (err) {
      if (err.response?.status === 429 && attempt < maxRetries - 1) {
        const retryAfter = Number(err.response.headers?.["retry-after"]) || 2;
        console.warn(`⏳ Discord rate-limit. Menunggu ${retryAfter} detik...`);
        await sleep((retryAfter + 0.5) * 1000);
        continue;
      }
      console.error("Gagal kirim webhook:", err.message);
      return false;
    }
  }

  return false;
}
