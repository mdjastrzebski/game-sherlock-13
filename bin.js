#!/usr/bin/env node

import { createGame, printGame } from "./dist/index.js";

function main() {
  const game = createGame(["Mc", "Mx", "Mr", "Tm"]);
  printGame(game);
}

main();
