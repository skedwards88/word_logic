import type {Letter, TrieNode} from "./Types.js";

export function getTrie(
  commonWords: string[],
  uncommonWords: string[],
): TrieNode {
  console.log("building trie");

  const trie: TrieNode = {};
  for (const word of uncommonWords) {
    // Typing the input as Iterable<Letter>[] makes it so you can't call with a list of strings without typecasting
    // so just formally make each word Letter[] here
    const letters = word.split("") as Letter[];

    let current = trie;
    for (const letter of letters) {
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current["endOfWord"] = true;
  }

  for (const word of commonWords) {
    // Typing the input as Iterable<Letter>[] makes it so you can't call with a list of strings without typecasting
    // so just formally make each word Letter[] here
    const letters = word.split("") as Letter[];

    let current = trie;
    for (const letter of letters) {
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current["endOfWord"] = true;
    current["easyWord"] = true;
  }

  return trie;
}
