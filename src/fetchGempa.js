import axios from "axios";

const BMKG_URL =
  "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchGempa() {
  const maxRetries = 4;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await axios.get(BMKG_URL, {
        timeout: 15000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; GempaMonitor/1.0; +https://github.com/)",
          Accept: "application/json",
        },
      });

      const gempa = res.data?.Infogempa?.gempa;

      if (!gempa) {
        throw new Error("Data gempa BMKG tidak ditemukan");
      }

      return {
        id: `${gempa.Tanggal} ${gempa.Jam}`,
        tanggal: gempa.Tanggal,
        jam: gempa.Jam,
        magnitude: Number.parseFloat(gempa.Magnitude),
        wilayah: gempa.Wilayah,
        potensi: gempa.Potensi,
        kedalaman: gempa.Kedalaman,
        koordinat: gempa.Coordinates,
        shakemap: gempa.Shakemap,
      };
    } catch (err) {
      const status = err.response?.status;

      // Bukan 429 → langsung gagal
      if (status !== 429) {
        console.error(
          "Gagal fetch BMKG:",
          status || "",
          err.message
        );
        return null;
      }

      // Sudah retry maksimal
      if (attempt === maxRetries) {
        console.error("BMKG tetap mengembalikan HTTP 429 setelah retry.");
        return null;
      }

      // Ambil Retry-After dari BMKG jika tersedia
      const retryAfter = err.response?.headers?.["retry-after"];

      let delay;

      if (retryAfter) {
        const retrySeconds = Number(retryAfter);

        delay = Number.isNaN(retrySeconds)
          ? 5000
          : retrySeconds * 1000;
      } else {
        // 2s → 4s → 8s → 16s
        delay = 2000 * 2 ** attempt;
      }

      console.warn(
        `BMKG rate limit (429). Retry ${attempt + 1}/${maxRetries} dalam ${delay} ms`
      );

      await sleep(delay);
    }
  }

  return null;
}
