import axios from "axios";

const BMKG_URL =
  "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchGempa() {
  const maxRetries = 3;

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

      // ✅ Sanitasi shakemap: abaikan jika "-", "None", atau kosong
      const rawShakemap = gempa.Shakemap?.trim();
      const validShakemap =
        rawShakemap &&
        rawShakemap !== "-" &&
        rawShakemap.toLowerCase() !== "none"
          ? rawShakemap
          : null;

      // ✅ Ambil field Dirasakan jika tersedia
      const rawDirasakan = gempa.Dirasakan?.trim();
      const validDirasakan =
        rawDirasakan && rawDirasakan !== "-" ? rawDirasakan : null;

      return {
        id: `${gempa.Tanggal} ${gempa.Jam}`,
        tanggal: gempa.Tanggal,
        jam: gempa.Jam,
        magnitude: Number.parseFloat(gempa.Magnitude) || 0,
        wilayah: gempa.Wilayah,
        potensi: gempa.Potensi,
        kedalaman: gempa.Kedalaman,
        koordinat: gempa.Coordinates,
        dirasakan: validDirasakan,
        shakemap: validShakemap,
      };
    } catch (err) {
      const status = err.response?.status;

      // ✅ Retry untuk: timeout/network error (no status), 429, 5xx server error
      const isRetryable =
        !status || // timeout, ECONNRESET, DNS error, dll
        status === 429 || // Rate limit
        status >= 500; // 500, 502, 503, 504 BMKG server issues

      // Jika error tidak bisa di-retry atau sudah habis percobaan → menyerah
      if (!isRetryable || attempt === maxRetries) {
        console.error(
          "Gagal fetch BMKG:",
          status || err.code || "",
          err.message
        );
        return null;
      }

      // Ambil Retry-After dari BMKG jika tersedia (hanya relevan saat 429)
      const retryAfterRaw = err.response?.headers?.["retry-after"];
      const retryAfterSecs = Number(retryAfterRaw);

      let delay;

      if (!Number.isNaN(retryAfterSecs) && retryAfterSecs > 0) {
        delay = retryAfterSecs * 1000;
      } else {
        // Exponential backoff: 2s → 4s → 8s
        delay = 2000 * 2 ** attempt;
      }

      console.warn(
        `Fetch BMKG gagal (${status || err.message}). Retry ${attempt + 1}/${maxRetries} dalam ${delay}ms...`
      );

      await sleep(delay);
    }
  }

  return null;
}
