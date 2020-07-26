import React from "react";
import "../../styles/DisplayChordButtons.css";
import notes from "../notes/Notes.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const DisplayChordButtons = (props) => {
  // propsから値取り出し
  const { chords, setChordNums } = props;

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

  const playChord = (nums) => {
    setChordNums(nums);
    nums.map((value) => {
      notes[value].currentTime = 0;
      notes[value].play();
    });
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
