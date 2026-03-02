import { FETCH_INTERVAL, MIN_MAGNITUDE } from "./config.js";
import { fetchGempa } from "./fetchGempa.js";
import { readLast, writeLast } from "./storage.js";
import { sendToDiscord } from "./notifier.js";

async function checkGempa() {
  const gempa = await fetchGempa();
  if (!gempa) return;

  const lastId = readLast();

  if (gempa.id === lastId) {
    console.log("Tidak ada gempa baru.");
    return;
  }

  if (gempa.magnitude < MIN_MAGNITUDE) {
    console.log("Gempa di bawah threshold.");
    writeLast(gempa.id);
    return;
  }

  await sendToDiscord(gempa);
  writeLast(gempa.id);
}

console.log("BMKG Monitor started...");
checkGempa();
setInterval(checkGempa, FETCH_INTERVAL);
