// Texts From Your Future Self — MakeFun entry
// One text message from the future self. No setup, no context —
// the message has to be funny standing on its own, and it has to
// sound like it was really sent by the person, ten years later.
// F3: concrete details (2am fix, 4 years undoing it, chair breaks
// at 3pm, side project pays the rent) + future self as the ACTIVE
// actor + punchline that escalates (back it up — today).
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "It's you from 2031. The 'temporary' fix you pushed at 2am? I spent 4 years undoing it. Your chair breaks at 3pm. The side project you're ignoring pays my rent now. Back it up. Today.";

if (ENTRY.length > 200) {
  throw new Error(`entry too long: ${ENTRY.length} chars (max 200)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(`chars: ${ENTRY.length}`);
console.log(ENTRY);
