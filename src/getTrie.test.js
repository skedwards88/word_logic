import {getTrie} from "./getTrie";

const commonWords = ["WALK", "CAMP", "QUIET", "LET"];
const uncommonWords = [
  "NATURE",
  "CAMPERS",
  "SOLITUDE",
  "HAPPINESS",
  "CAMPERVANS",
  "SCAMPER",
  "SCAMPERS",
  "CAMPER",
];

test("Trie builds as expected", () => {
  const trie = getTrie(commonWords, uncommonWords);

  const expectedTrie = {
    N: {
      A: {
        T: {
          U: {
            R: {
              E: {
                endOfWord: true,
              },
            },
          },
        },
      },
    },
    C: {
      A: {
        M: {
          P: {
            E: {
              R: {
                S: {
                  endOfWord: true,
                },
                V: {
                  A: {
                    N: {
                      S: {
                        endOfWord: true,
                      },
                    },
                  },
                },
                endOfWord: true,
              },
            },
            endOfWord: true,
            easyWord: true,
          },
        },
      },
    },
    S: {
      O: {
        L: {
          I: {
            T: {
              U: {
                D: {
                  E: {
                    endOfWord: true,
                  },
                },
              },
            },
          },
        },
      },
      C: {
        A: {
          M: {
            P: {
              E: {
                R: {
                  endOfWord: true,
                  S: {
                    endOfWord: true,
                  },
                },
              },
            },
          },
        },
      },
    },
    H: {
      A: {
        P: {
          P: {
            I: {
              N: {
                E: {
                  S: {
                    S: {
                      endOfWord: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    W: {
      A: {
        L: {
          K: {
            endOfWord: true,
            easyWord: true,
          },
        },
      },
    },
    Q: {
      U: {
        I: {
          E: {
            T: {
              endOfWord: true,
              easyWord: true,
            },
          },
        },
      },
    },
    L: {
      E: {
        T: {
          endOfWord: true,
          easyWord: true,
        },
      },
    },
  };

  expect(trie).toEqual(expectedTrie);
});
