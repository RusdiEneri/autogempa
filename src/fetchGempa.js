import axios from "axios";

const BMKG_URL = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

export async function fetchGempa() {
  try {
    const res = await axios.get(BMKG_URL, { timeout: 10000 });
    const gempa = res.data.Infogempa.gempa;

    return {
      id: `${gempa.Tanggal} ${gempa.Jam}`,
      tanggal: gempa.Tanggal,
      jam: gempa.Jam,
      magnitude: parseFloat(gempa.Magnitude),
      wilayah: gempa.Wilayah,
      potensi: gempa.Potensi,
      kedalaman: gempa.Kedalaman,
      koordinat: gempa.Coordinates
    };
  } catch (err) {
    console.error("Gagal fetch BMKG:", err.message);
    return null;
  }
}
