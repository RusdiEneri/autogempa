import { MIN_MAGNITUDE } from "./config.js";
import { fetchGempa } from "./fetchGempa.js";
import { readLast, writeLast } from "./storage.js";
import { sendToDiscord } from "./notifier.js";

async function checkGempa() {
  const gempa = await fetchGempa();

  if (!gempa) {
    console.log("Gagal mengambil data BMKG.");
    return;
  }

  const lastId = readLast();

  if (gempa.id === lastId) {
    console.log("Tidak ada gempa baru.");
    return;
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
