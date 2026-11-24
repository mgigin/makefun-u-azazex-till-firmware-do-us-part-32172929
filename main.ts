import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part — v2 (revised: added the discontinued-model kicker,
// the laugh that makes the tenderness land harder)
// A robot's wedding vow: funny and heartfelt at once. The laugh comes from
// the machine's own hardware; the tenderness from what it refuses to forget.
const ENTRY =
  "I vow to keep your laugh in read-only memory, where no update, no crash, and no factory reset can ever overwrite it — even after they discontinue my model.";

// Gate (kit RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, a single line.
const chars = Array.from(ENTRY);
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
