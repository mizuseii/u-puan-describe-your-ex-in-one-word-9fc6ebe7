// Describe Your Ex in One Word: the word is "Outsourced".
// Idea: the ex was not lost, dumped or outgrown — they were outsourced.
// One corporate word turns a breakup into a business decision: cheaper
// labour elsewhere, same job, no severance. It lands instantly for anyone
// who has watched their role — or their relationship — get handed to a
// cheaper vendor, and it says the whole story without a single extra word.
// Fresh vs the field (2,383 titles): the saturated cluster is unsubscribe /
// unsubscribed (349 combined), then verdict, placeholder, recalled, expired,
// uninstalled, refund. "Outsourced" sits outside all of them — a specific,
// concrete, modern word, not another breakup cliché.
// Verified 2026-11-26: entry is exactly 10 characters, one word, no spaces,
// no trailing newline. Gate guard below enforces the 1–111 char, single-word
// rule at runtime so a bad edit can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Outsourced";

if (line.length < 1 || line.length > 111) throw new Error("entry must be 1-111 chars");
if (line.trim().split(/\s+/).filter(Boolean).length !== 1) throw new Error("entry must be one word");
if (!/^[A-Za-z]+$/.test(line)) throw new Error("entry must be a single spelled word, nothing added around it");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
