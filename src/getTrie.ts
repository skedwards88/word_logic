import type { Letter, TrieNode } from "./Types";

export function getTrie(commonWords: Iterable<Letter>[], uncommonWords: Iterable<Letter>[]): TrieNode {
  console.log("building trie");

  const trie: TrieNode = {};
  for (const word of uncommonWords) {
    let current = trie;
    for (const letter of word) {

      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current["endOfWord"] = true;
  }

  for (const word of commonWords) {
    let current = trie;
    for (const letter of word) {
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
