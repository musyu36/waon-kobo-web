export const createNextChord = (rootNum, chordType) => {
  const nextChordNums = [];

  nextChordNums.push(rootNum);
  switch (chordType) {
    case "maj":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      return nextChordNums;
    case "min":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 7);
      return nextChordNums;
    case "7":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      return nextChordNums;
    case "M7":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 11);
      return nextChordNums;
    case "m7":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      return nextChordNums;
    case "mM7":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 11);
      return nextChordNums;
    case "dim":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 6);
      nextChordNums.push(rootNum + 9);
      return nextChordNums;
    case "sus4":
      nextChordNums.push(rootNum + 5);
      nextChordNums.push(rootNum + 7);
      return nextChordNums;
    case "7sus4":
      nextChordNums.push(rootNum + 5);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      return nextChordNums;
    case "aug":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 8);
      return nextChordNums;
    case "m7(♭5)":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 6);
      nextChordNums.push(rootNum + 10);
      return nextChordNums;
    case "6":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 9);
      return nextChordNums;
    case "add9":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 14);
      return nextChordNums;
    case "9":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      nextChordNums.push(rootNum + 14);
      return nextChordNums;
    case "7(♭9)":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      nextChordNums.push(rootNum + 13);
      return nextChordNums;
    case "7(♯9)":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 7);
      nextChordNums.push(rootNum + 10);
      nextChordNums.push(rootNum + 15);
      return nextChordNums;
    case "m(♭5)":
      nextChordNums.push(rootNum + 3);
      nextChordNums.push(rootNum + 6);
      return nextChordNums;
    case "(♯5)":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 6);
      return nextChordNums;
    case "M7(♯5)":
      nextChordNums.push(rootNum + 4);
      nextChordNums.push(rootNum + 6);
      nextChordNums.push(rootNum + 11);
      return nextChordNums;
    default:
      return nextChordNums;
  }
};
