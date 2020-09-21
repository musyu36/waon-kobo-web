import React, { useState } from "react";
import "../../styles/ChordButtons.css";
import ButtonSet from "./ButtonSet.js";
import KeyBoard from "./KeyBoard.js";
import ShuffleButton from "./ShuffleButton.js";
import diatonicChords from "./DiatonicChords.js";

const ChordButtons = (props) => {
  // propsから値取り出し
  const { handleChords } = props;

  const [chordNums, setChordNums] = useState([]);

  // majorではなくmajに注意
  const initialRandomChords = [
    [0, "maj"],
    [0, "maj"],
    [0, "maj"],
    [0, "maj"],
  ];
  const [randomChords, setRandomChords] = useState(initialRandomChords);

  const scaleStrings = ["major", "minor", "h_minor", "m_minor"];

  //コードシャッフル
  const shuffleChords = () => {
    console.log("### shuffleChords");
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
  };

  return (
    <>
      <ShuffleButton shuffleChords={shuffleChords} />
      <div className="chord-buttons">
        <ButtonSet
          btnNum={0}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
          randomChord={randomChords[0]}
        />
        <ButtonSet
          btnNum={1}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
          randomChord={randomChords[1]}
        />
        <ButtonSet
          btnNum={2}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
          randomChord={randomChords[2]}
        />
        <ButtonSet
          btnNum={3}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
          randomChord={randomChords[3]}
        />
      </div>
      <KeyBoard chords={chordNums} />
    </>
  );
};

export default ChordButtons;
