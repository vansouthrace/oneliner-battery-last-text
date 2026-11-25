import { writeFileSync, mkdirSync } from "fs";

// The phone battery's final text to the charger it waited for all day.
const entry =
  "It's me, 1%. You left me on the table all day while you doomscrolled at 4%. Tell the charger I waited all day. Tell it I loved it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
