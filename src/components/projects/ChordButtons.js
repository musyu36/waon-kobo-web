import React, { useState } from "react";
import "../../styles/ChordButtons.css";
import ButtonSet from "./ButtonSet.js";
import KeyBoard from "./KeyBoard.js";
import ShuffleButton from "./ShuffleButton.js";

const ChordButtons = (props) => {
  // propsから値取り出し
  const { handleChords } = props;

  const [chordNums, setChordNums] = useState([]);

  return (
    <>
      <ShuffleButton />
      <div className="chord-buttons">
        <ButtonSet
          btnNum={0}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
        />
        <ButtonSet
          btnNum={1}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
        />
        <ButtonSet
          btnNum={2}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
        />
        <ButtonSet
          btnNum={3}
          handleChords={(nextChords, index) => handleChords(nextChords, index)}
          setChordNums={setChordNums}
        />
      </div>
      <KeyBoard chords={chordNums} />
    </>
  );
};

export default ChordButtons;
