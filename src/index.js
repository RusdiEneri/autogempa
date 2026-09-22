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
  const shakemapExists = fs.existsSync("assets/shakemap.jpg");

  // ─── Kasus: Gempa sama dengan yang sudah tercatat ───────────────────────────
  if (gempa.id === lastId) {
    // ✅ Self-healing: README belum ada ATAU shakemap baru tersedia dari BMKG
    // (BMKG sering rilis data tanpa shakemap, lalu baru muncul 2–4 menit kemudian)
    const needsReadmeRefresh =
      !readmeExists || (gempa.shakemap && !shakemapExists);

    if (needsReadmeRefresh) {
      console.log(
        "Gempa sama, namun README/shakemap perlu diperbarui (self-healing)."
      );
      try {
        await updateReadme(gempa);
      } catch (err) {
        console.error("Gagal update README (self-healing):", err.message);
      }
      return;
    }

    console.log("Tidak ada gempa baru.");
    return;
  }

  // ─── Kasus: Gempa BARU terdeteksi ──────────────────────────────────────────

  // 1. Perbarui README, riwayat, dan unduh shakemap
  try {
    await updateReadme(gempa);
  } catch (err) {
    console.error("Gagal update README (monitor tetap lanjut):", err.message);
  }

  // 2. Catat ID gempa baru sebelum mengirim notifikasi
  //    (mencegah notif duplikat jika proses terhenti di tengah jalan)
  writeLast(gempa.id);

  // 3. Kirim notifikasi Discord jika magnitude memenuhi threshold
  if (gempa.magnitude < MIN_MAGNITUDE) {
    console.log(
      `Gempa M${gempa.magnitude} di bawah threshold ${MIN_MAGNITUDE}, notifikasi Discord dilewati.`
    );
    return;
  }

  await sendToDiscord(gempa);

  console.log(
    `✅ Notifikasi terkirim: M${gempa.magnitude} - ${gempa.wilayah}`
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