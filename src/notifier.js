import axios from "axios";
import { WEBHOOK_URL } from "./config.js";

export async function sendToDiscord(gempa) {
  const color = gempa.magnitude >= 5 ? 16711680 : 16753920;

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
        color
      }
    ]
  };

  try {
    await axios.post(WEBHOOK_URL, payload);
    console.log("Notifikasi terkirim.");
  } catch (err) {
    console.error("Gagal kirim webhook:", err.message);
  }
}
