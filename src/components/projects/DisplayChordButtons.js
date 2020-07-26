import React, { useContext, useEffect, useState } from "react";
import "../../styles/DisplayChordButtons.css";
import notes from "../notes/Notes.js";
import Button from "@material-ui/core/Button";
import diatonicChords from "./DiatonicChords.js";
import { makeStyles } from "@material-ui/core/styles";

var id = null;
var currentChordsDic = {
  1: [0, 4, 7],
  2: [0, 4, 7],
  3: [0, 4, 7],
  4: [0, 4, 7],
};

const initialCurrentChords = {
  1: [0, 4, 7],
  2: [0, 4, 7],
  3: [0, 4, 7],
  4: [0, 4, 7],
};

// majorではなくmajに注意
const initialRandomChords = [
  [0, "maj"],
  [0, "maj"],
  [0, "maj"],
  [0, "maj"],
];

const scaleStrings = ["major", "minor", "h_minor", "m_minor"];

const DisplayChordButtons = (props) => {
  // propsから値取り出し
  const { chords } = props;

  // 選択されている4つのコード
  const [currentChords, setCurrentChords] = useState(initialCurrentChords);

  const [randomChords, setRandomChords] = useState(initialRandomChords);

  // 表示用state
  const [displayScale, setDisplayScale] = useState("");
  const [displayKey, setDisplayKey] = useState("");

  useEffect(() => {
    currentChordsDic = currentChords;
  }, [currentChords]);

  const useStyles = makeStyles((theme) => ({
    btnChord: {
      marginLeft: "4px",
      marginRight: "4px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#fcfdff",
      },
      "&:focus": {
        backgroundColor: "#fcfdff",
      },
    },
  }));
  const classes = useStyles();

  // 再生
  const playChords = () => {
    const tm = 200;
    var i = 2;
    const fn = function () {
      if (i > 4) {
        clearInterval(id);
        id = null;
        return;
      }
      if (i < 5) {
        currentChordsDic[i].map((value) => {
          notes[value].currentTime = 0;
          notes[value].play();
        });
      }
      i++;
    };
    if (!id) {
      currentChordsDic[1].map((value) => {
        notes[value].currentTime = 0;
        notes[value].play();
      });
      id = setInterval(fn, tm);
    }
  };

  const playChord = (nums) => {
    nums.map((value) => {
      notes[value].currentTime = 0;
      notes[value].play();
    });
  };

  //コードシャッフル
  const shuffleChords = () => {
    const randomScaleNum = Math.floor(Math.random() * 4);
    const randomRootNum = Math.floor(Math.random() * 12);
    const randomDiatonic = [
      Math.floor(Math.random() * 14 + 1),
      Math.floor(Math.random() * 14 + 1),
      Math.floor(Math.random() * 14 + 1),
      Math.floor(Math.random() * 14 + 1),
    ];

    var randomScale = scaleStrings[randomScaleNum];
    var randomDiatonicSet = [];

    randomDiatonic.map((value) => {
      var rootNum = null;
      switch (randomScale) {
        // メジャースケール
        case "major":
          switch (value) {
            // IM7
            case 1:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              // [選ばれたキーの音 + キーの音からルート音がどれだけ離れているか, コードの種類]
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // IIm7
            case 2:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // IIIm7
            case 3:
              rootNum = randomRootNum + 4;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // IVM7
            case 4:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // V7
            case 5:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // VI7
            case 6:
              rootNum = randomRootNum + 9;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // VII7
            case 7:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            // case 8 以降はトライアド
            case 8:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 9:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 10:
              rootNum = randomRootNum + 4;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 11:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 12:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 13:
              rootNum = randomRootNum + 9;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 14:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            default:
              break;
          }
          break;
        case "minor":
          switch (value) {
            case 1:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 2:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 3:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 4:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 5:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 6:
              rootNum = randomRootNum + 8;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 7:
              rootNum = randomRootNum + 10;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 8:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 9:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 10:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 11:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 12:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 13:
              rootNum = randomRootNum + 8;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 14:
              rootNum = randomRootNum + 10;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            default:
              break;
          }
          break;
        case "h_minor":
          switch (value) {
            case 1:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 2:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 3:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 4:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 5:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 6:
              rootNum = randomRootNum + 8;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 7:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 8:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 9:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 10:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 11:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 12:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 13:
              rootNum = randomRootNum + 8;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 14:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            default:
              break;
          }
          break;
        case "m_minor":
          switch (value) {
            case 1:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 2:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 3:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 4:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 5:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 6:
              rootNum = randomRootNum + 9;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 7:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            case 8:
              rootNum = randomRootNum + 0;
              while (rootNum >= 12) {
                rootNum -= 12;
              }

              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 9:
              rootNum = randomRootNum + 2;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 10:
              rootNum = randomRootNum + 3;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 11:
              rootNum = randomRootNum + 5;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 12:
              rootNum = randomRootNum + 7;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 13:
              rootNum = randomRootNum + 9;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;

            case 14:
              rootNum = randomRootNum + 11;
              while (rootNum >= 12) {
                rootNum -= 12;
              }
              randomDiatonicSet.push([
                rootNum,
                diatonicChords[randomScale][value],
              ]);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    });
    setRandomChords(randomDiatonicSet);
    updateDisplayScale(randomScale);
    updateDisplayKey(randomRootNum);
  };

  const updateDisplayScale = (randomScale) => {
    switch (randomScale) {
      case "major":
        setDisplayScale("Major");
        break;
      case "minor":
        setDisplayScale("Minor");
        break;
      case "h_minor":
        setDisplayScale("Harmonic Minor");
        break;
      case "m_minor":
        setDisplayScale("Melodic Minor");
        break;
      default:
        break;
    }
  };

  const updateDisplayKey = (randomRootNum) => {
    switch (randomRootNum) {
      case 0:
        setDisplayKey("C");
        break;
      case 1:
        setDisplayKey("C♯");
        break;
      case 2:
        setDisplayKey("D");
        break;
      case 3:
        setDisplayKey("D♯");
        break;
      case 4:
        setDisplayKey("E");
        break;
      case 5:
        setDisplayKey("F");
        break;
      case 6:
        setDisplayKey("F♯");
        break;
      case 7:
        setDisplayKey("G");
        break;
      case 8:
        setDisplayKey("G♯");
        break;
      case 9:
        setDisplayKey("A");
        break;
      case 10:
        setDisplayKey("A♯");
        break;
      case 11:
        setDisplayKey("B");
        break;
      default:
        break;
    }
  };

  const deleteDisplayScaleAndKey = () => {
    setDisplayScale("");
    setDisplayKey("");
  };

  return (
    <>
      <div className="display-chord-buttons">
        {chords &&
          chords.map((chord, index) => {
            return (
              <Button
                className={classes.btnChord}
                variant="outlined"
                onClick={() => playChord(chord.chordNums)}
                key={index}
              >
                {chord.rootName}
                {chord.chordType}
              </Button>
            );
          })}
      </div>
    </>
  );
};

export default DisplayChordButtons;
