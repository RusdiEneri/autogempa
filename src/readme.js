import fs from "fs";
import path from "path";
import axios from "axios";

const README_PATH = path.resolve("README.md");
const ASSETS_DIR = path.resolve("assets");
const SHAKEMAP_PATH = path.join(ASSETS_DIR, "shakemap.jpg");
const HISTORY_PATH = path.resolve("data/history.json");
const MAX_HISTORY = 15;

/* ================= RIWAYAT GEMPA ================= */

export function readHistory() {
  try {
    if (!fs.existsSync(HISTORY_PATH)) return [];
    const raw = fs.readFileSync(HISTORY_PATH, "utf8").trim();
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Gagal baca history:", err.message);
    return [];
  }
}

function writeHistory(history) {
  fs.mkdirSync(path.dirname(HISTORY_PATH), { recursive: true });
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

export function pushHistory(gempa) {
  const history = readHistory().filter((h) => h.id !== gempa.id);
  history.unshift({ ...gempa, detectedAt: new Date().toISOString() });
  const trimmed = history.slice(0, MAX_HISTORY);
  writeHistory(trimmed);
  return trimmed;
}

/* ================= DOWNLOAD SHAKEMAP ================= */

export async function downloadShakemap(gempa) {
  // ✅ Tidak ada shakemap valid → langsung null, jangan download
  if (!gempa.shakemap) return null;

  const remoteUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.shakemap}`;

  try {
    const res = await axios.get(remoteUrl, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GempaMonitor/1.0)" },
    });

    fs.mkdirSync(ASSETS_DIR, { recursive: true });
    fs.writeFileSync(SHAKEMAP_PATH, Buffer.from(res.data));
    console.log("🗺️ Shakemap disimpan ke assets/shakemap.jpg");
    return "assets/shakemap.jpg";
  } catch (err) {
    console.error("Gagal download shakemap:", err.message);

    // ✅ Jika 404, shakemap belum ada di server BMKG → jangan tampilkan gambar rusak
    if (err.response?.status === 404) {
      console.warn("Shakemap 404 dari BMKG, dianggap tidak tersedia.");
      return null;
    }

    // Error jaringan / timeout → fallback hotlink ke BMKG
    return remoteUrl;
  }
}

/* ================= GENERATOR README ================= */

function escapeMd(text) {
  return String(text ?? "").replace(/\|/g, "\\|");
}

export function buildReadme(gempa, history, imagePath) {
  const nowWIB = new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  const imageMd = imagePath
    ? `![Peta Guncangan (Shakemap) BMKG](${imagePath})`
    : "_Shakemap belum tersedia untuk gempa ini._";

  // ✅ Tampilkan baris "Dirasakan" hanya jika ada datanya
  const dirasakanRow = gempa.dirasakan
    ? `| 📡 **Dirasakan** | ${escapeMd(gempa.dirasakan)} |\n`
    : "";

  const historyRows = history
    .map(
      (g) =>
        `| ${escapeMd(g.tanggal)} ${escapeMd(g.jam)} | **M ${g.magnitude}** | ${escapeMd(g.wilayah)} | ${escapeMd(g.kedalaman)} | ${escapeMd(g.potensi)} |`
    )
    .join("\n");

  return `# 🌍 AutoGempa — Informasi Gempa Terkini Indonesia

> Monitor gempa bumi real-time untuk wilayah Indonesia. Data diambil otomatis dari **BMKG** setiap 5 menit oleh GitHub Actions, lalu ditampilkan lengkap di README ini beserta peta guncangannya (shakemap).

🕒 **Update otomatis terakhir:** ${nowWIB}

---

## 🚨 Gempa Terkini

| Parameter | Detail |
| --- | --- |
| 📊 **Magnitudo** | M ${gempa.magnitude} |
| 📍 **Wilayah** | ${escapeMd(gempa.wilayah)} |
| 🕒 **Waktu** | ${escapeMd(gempa.tanggal)}, ${escapeMd(gempa.jam)} |
| 🧭 **Koordinat** | ${escapeMd(gempa.koordinat)} |
| 📏 **Kedalaman** | ${escapeMd(gempa.kedalaman)} |
| 🌊 **Potensi** | ${escapeMd(gempa.potensi)} |
${dirasakanRow}| 🔗 **Sumber** | [BMKG — InfoGempa Realtime](https://www.bmkg.go.id/gempabumi) |

### 🗺️ Peta Guncangan (Shakemap)

${imageMd}

---

## 📜 Riwayat ${history.length} Gempa Terakhir

| Waktu | Magnitudo | Wilayah | Kedalaman | Potensi |
| --- | --- | --- | --- | --- |
${historyRows}

---

## 🛠️ Cara Kerja Repository Ini

- Workflow \`.github/workflows/bmkg.yml\` berjalan otomatis setiap **5 menit**.
- \`src/index.js\` mengambil data dari \`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json\`.
- Jika terdeteksi gempa **baru**:
  - \`README.md\` di-generate ulang (info detail + shakemap),
  - gambar shakemap disimpan ke \`assets/shakemap.jpg\`,
  - riwayat disimpan di \`data/history.json\` (maksimal ${MAX_HISTORY} gempa),
  - semua di-commit & push otomatis ke branch \`main\`.
- Notifikasi **Discord** tetap dikirim jika magnitudo ≥ \`MIN_MAGNITUDE\`.

---

<div align="center">

Dibuat dengan ❤️ oleh [RusdiEneri](https://github.com/RusdiEneri) • Sumber data: [BMKG](https://www.bmkg.go.id/)

_README ini dibuat otomatis oleh GitHub Actions — jangan edit manual._

</div>
`;
}

/* ================= ORCHESTRATOR ================= */

export async function updateReadme(gempa) {
  const history = pushHistory(gempa);
  const imagePath = await downloadShakemap(gempa);
  const markdown = buildReadme(gempa, history, imagePath);
  fs.writeFileSync(README_PATH, markdown, "utf8");
  console.log("📄 README.md diperbarui.");
}