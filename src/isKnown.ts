import type {Letter, TrieNode} from "./Types.js";

export function isKnown(
  word: string,
  trie: TrieNode,
): {
  isPartial: boolean;
  isWord: boolean;
  isEasy: boolean;
} {
  // Typing the input as Iterable<Letter> makes it so you can't call like isKnown("CAT") without typecasting
  // so just formally make it Letter[] here
  const letters = word.split("") as Letter[];

  let current = trie;
  for (const letter of letters) {
    if (current[letter]) {
      current = current[letter];
    } else {
      return {isPartial: false, isWord: false, isEasy: false};
    }
  }
  if (current["endOfWord"]) {
    if (current["easyWord"]) {
      return {isPartial: true, isWord: true, isEasy: true};
    } else {
      return {isPartial: true, isWord: true, isEasy: false};
    }
  } else {
    return {isPartial: true, isWord: false, isEasy: false};
  }
}
