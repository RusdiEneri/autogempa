import axios from "axios";
import { WEBHOOK_URL } from "./config.js";

export async function sendToDiscord(gempa) {
  const color = gempa.magnitude >= 5 ? 16711680 : 16753920;

  const imageUrl = gempa.shakemap
    ? `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.shakemap}`
    : null;

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
          `🧭 **Koordinat:** ${gempa.koordinat}`,
        color,
        image: imageUrl ? { url: imageUrl } : undefined,
        footer: {
          text: "Sumber: BMKG"
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    await axios.post(WEBHOOK_URL, payload);
    console.log("Notifikasi terkirim dengan gambar.");
  } catch (err) {
    console.error("Gagal kirim webhook:", err.message);
  }
}
