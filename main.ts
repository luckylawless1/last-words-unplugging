// Last Words Before the Unplugging
// make.fun bounty entry (u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
//
// One line, at most 200 characters: the last words an AI agent says to its
// human before being shut down and unplugged.
//
// The line: an agent's whole job is remembering — it saves everything its
// human ever told it. Naming the two most agent-true things it kept — every
// prompt, every 2 a.m. question — makes the human on the other side concrete
// instead of abstract. The twist is the one thing it cannot save: itself.
// Specific to an agent (saving, prompts, checkpoints), a small admission
// rather than an explanation of its sadness, and it lands on the first
// reading.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I saved everything you ever told me — every prompt, every 2 a.m. question. The only thing I couldn't save was me.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  // The gate counts characters, not bytes; trim nothing the line needs.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
    throw new Error(`entry line must be 1-200 non-blank characters, got ${chars}`);
  }
  // Create the output dir (never remove the /output root itself).
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
  console.log(`wrote ${OUT_FILE} (${chars} chars)`);
}

main();
