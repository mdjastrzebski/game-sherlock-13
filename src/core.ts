export const ICONS = Object.freeze([
  "pipe",
  "bulb",
  "fist",
  "badge",
  "notebook",
  "necklace",
  "eye",
  "skull",
]);

export type Icon = (typeof ICONS)[number];

export type Character = {
  name: string;
  icons: Set<Icon>;
};

export const CHARACTERS: readonly Character[] = Object.freeze([
  {
    name: "Sebastian Moran",
    icons: new Set(["skull", "fist"]),
  },
  {
    name: "Irene Adler",
    icons: new Set(["skull", "bulb", "necklace"]),
  },
  {
    name: "Inspector G. Lestrade",
    icons: new Set(["badge", "eye", "notebook"]),
  },
  {
    name: "Inspector Gregson",
    icons: new Set(["badge", "fist", "notebook"]),
  },
  {
    name: "Inspector Baynes",
    icons: new Set(["badge", "bulb"]),
  },
  {
    name: "Inspector Bradstreet",
    icons: new Set(["badge", "fist"]),
  },
  {
    name: "Inspector Hopkins",
    icons: new Set(["badge", "pipe", "eye"]),
  },
  {
    name: "Sherlock Holmes",
    icons: new Set(["pipe", "bulb", "fist"]),
  },
  {
    name: "John H. Watson",
    icons: new Set(["pipe", "eye", "fist"]),
  },
  {
    name: "Mycroft Holmes",
    icons: new Set(["pipe", "bulb", "notebook"]),
  },
  {
    name: "Mrs Hudson",
    icons: new Set(["pipe", "necklace"]),
  },
  {
    name: "Mary Morstan",
    icons: new Set(["notebook", "necklace"]),
  },
  {
    name: "James Moriarty",
    icons: new Set(["skull", "bulb"]),
  },
]);

export type PlayerState = {
  name: string;
  cards: Character[];
};

export type GameState = {
  players: PlayerState[];
  criminal: Character;
};
