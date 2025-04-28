import { type Character, CHARACTERS, type GameState, type PlayerState } from "./core.js";

function shuffleCards(cards: Character[]) {
  return cards.sort(() => Math.random() - 0.5);
}

export function createGame(names: string[]) {
  const cards = shuffleCards([...CHARACTERS]);
  const players = names.map((name) => ({ name, cards: cards.splice(0, 3) }));
  const criminal = cards.pop();
  return { players, criminal };
}

export function printGame(game: GameState) {
  console.log(game.players.map((player) => formatPlayerState(player)).join("\n\n"));
  console.log(`\nCriminal: ${formatCharacter(game.criminal)}`);
}

export function formatPlayerState(player: PlayerState) {
  return `${player.name}:\n${player.cards.map((card) => `- ${formatCharacter(card)}`).join("\n")}`;
}

export function formatCharacter(character: Character) {
  return `${character.name} (${Array.from(character.icons).join(", ")})`;
}
