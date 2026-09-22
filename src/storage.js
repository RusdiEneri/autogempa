import fs from "fs";
import path from "path";

const DATA_PATH = path.resolve("data/last.json");

export function readLast() {
  if (!fs.existsSync(DATA_PATH)) {
    return null;
  }

  const raw = fs.readFileSync(DATA_PATH, "utf8");
  const data = JSON.parse(raw);
  return data.last_id;
}

export function writeLast(id) {
  fs.writeFileSync(
    DATA_PATH,
    JSON.stringify({ last_id: id }, null, 2)
  );
}
