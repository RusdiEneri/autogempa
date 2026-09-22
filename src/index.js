import fs from "fs";
import { MIN_MAGNITUDE } from "./config.js";
import { fetchGempa } from "./fetchGempa.js";
import { readLast, writeLast } from "./storage.js";
import { sendToDiscord } from "./notifier.js";
import { updateReadme } from "./readme.js";

async function checkGempa() {
  const gempa = await fetchGempa();

  if (!gempa) {
    console.log("Gagal mengambil data BMKG.");
    return;
  }

  const lastId = readLast();
  const readmeExists = fs.existsSync("README.md");

  // README belum pernah ada (run pertama) → buat README awal
  if (gempa.id === lastId && !readmeExists) {
    console.log("README.md belum ada → membuat README awal.");
    await updateReadme(gempa);
    return;
  }

  if (gempa.id === lastId) {
    console.log("Tidak ada gempa baru.");
    return;
  }

  // ✅ BARU: setiap gempa baru langsung masuk README + riwayat + shakemap
  try {
    await updateReadme(gempa);
  } catch (err) {
    console.error("Gagal update README (monitor tetap lanjut):", err.message);
  }

  if (gempa.magnitude < MIN_MAGNITUDE) {
    console.log(
      `Gempa M${gempa.magnitude} di bawah threshold ${MIN_MAGNITUDE}.`
    );
    writeLast(gempa.id);
    return;
  }

  await sendToDiscord(gempa);
  writeLast(gempa.id);

  console.log(
    `Notifikasi terkirim: M${gempa.magnitude} - ${gempa.wilayah}`
  );
}

console.log("BMKG Monitor started...");

try {
  await checkGempa();
  console.log("BMKG Monitor finished.");
  process.exit(0);
} catch (err) {
  console.error("Fatal error:", err);
  process.exit(1);
}