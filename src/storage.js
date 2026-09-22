import fs from "fs";
import path from "path";

const DATA_PATH = path.resolve("data/last.json");

export function readLast() {
  try {
    if (!fs.existsSync(DATA_PATH)) return null;
    const raw = fs.readFileSync(DATA_PATH, "utf8").trim();
    // ✅ Guard: file kosong atau terpotong saat penulisan sebelumnya
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data?.last_id || null;
  } catch (err) {
    console.warn("Gagal membaca last.json, dianggap belum ada data:", err.message);
    return null;
  }
}

export function writeLast(id) {
  // ✅ Pastikan folder data/ selalu ada sebelum menulis
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify({ last_id: id }, null, 2));
}
