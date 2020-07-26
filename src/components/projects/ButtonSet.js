import "../../styles/ButtonSet.css";
import React, { useContext, useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import HammerIcon from "./HammerIcon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import notes from "../notes/Notes.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: "80%",
    overflow: "scroll",
    height: "100%",
    maxHeight: 500,
    display: "block",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: "#e6f0fa",
    borderTop: "2px solid #16acde",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
  btnChord: {
    marginBottom: 8,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fcfdff",
    },
    "&:focus": {
      backgroundColor: "#fcfdff",
    },
  },
  btnSelect: {
    "&:hover": {
      backgroundColor: "#fcfdff",
    },
    "&:focus": {
      backgroundColor: "#fcfdff",
    },
  },
  btnCancel: {
    marginRight: 8,
    color: "#16acde",
    border: "1px solid #16acde",
    "&:hover": {
      color: "#1184ab",
      border: "1px solid #1184ab",
    },
  },
  btnOk: {
    backgroundColor: "#16acde",
    color: "#e6f0fa",
    border: "1px solid #16acde",
    "&:hover": {
      backgroundColor: "#1184ab",
      color: "e6f0fa",
      border: "1px solid #1184ab",
    },
  },
}));

const styles = (theme) => ({
  radio: {
    "&$checked": {
      color: "#4B8DF8",
    },
  },
  checked: {},
});

const ButtonSet = ({
  btnNum,
  playingNum,
  chords,
  handleChords,
  currentChords,
  setCurrentChords,
  randomChord,
  deleteDisplayScaleAndKey,
  setChordNums,
}) => {
  const initialState = [0, 4, 7];

  const [state, setState] = useState(initialState);

  const initialNotesState = [
    { name: "C", value: 0, checked: true },
    { name: "C♯", value: 1, checked: false },
    { name: "D", value: 2, checked: false },
    { name: "D♯", value: 3, checked: false },
    { name: "E", value: 4, checked: false },
    { name: "F", value: 5, checked: false },
    { name: "F♯", value: 6, checked: false },
    { name: "G", value: 7, checked: false },
    { name: "G♯", value: 8, checked: false },
    { name: "A", value: 9, checked: false },
    { name: "A♯", value: 10, checked: false },
    { name: "B", value: 11, checked: false },
  ];

  const initialChordState = [
    { name: "maj", value: 0, checked: true },
    { name: "min", value: 1, checked: false },
    { name: "7", value: 2, checked: false },
    { name: "M7", value: 3, checked: false },
    { name: "m7", value: 4, checked: false },
    { name: "mM7", value: 5, checked: false },
    { name: "dim", value: 6, checked: false },
    { name: "sus4", value: 7, checked: false },
    { name: "7sus4", value: 8, checked: false },
    { name: "aug", value: 9, checked: false },
    { name: "m7(♭5)", value: 10, checked: false },
    { name: "6", value: 11, checked: false },
    { name: "add9", value: 12, checked: false },
    { name: "9", value: 13, checked: false },
    { name: "7(♭9)", value: 14, checked: false },
    { name: "7(♯9)", value: 15, checked: false },
    { name: "m(♭5)", value: 16, checked: false },
    { name: "(♯5)", value: 17, checked: false },
    { name: "M7(♯5)", value: 18, checked: false },
  ];

  // ルート音
  const [notesStrings, setNotesStrings] = useState(initialNotesState);
  const [currentNote, setCurrentNote] = useState("C");

  // 構成
  const [chordStrings, setChordStrings] = useState(initialChordState);
  const [currentChord, setCurrentChord] = useState("maj");

  // モーダル管理
  const [openChordModal, setOpenChordModal] = useState(false);

  // モーダルスタイル
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  // モーダル開閉
  const handleOpenChordModal = () => {
    setOpenChordModal(true);
  };

  const handleCloseChordModal = () => {
    setOpenChordModal(false);
  };

  // コードシャッフル
  const shuffleRootRadio = (randomChordRootNum) => {
    const value = notesStrings.map((item) => {
      return {
        name: item.name,
        value: item.value,
        checked: item.value === randomChordRootNum ? true : false,
      };
    });
    setNotesStrings(value);
  };

  const shuffleChordRadio = (randomChordName) => {
    const value = chordStrings.map((item) => {
      return {
        name: item.name,
        value: item.value,
        checked: item.name === randomChordName ? true : false,
      };
    });
    setChordStrings(value);
  };

  // コード選択
  const handleRootRadioClick = (e) => {
    const name = e.target.name;
    const value = notesStrings.map((item) => {
      return {
        name: item.name,
        value: item.value,
        checked: item.name === name ? true : false,
      };
    });
    setNotesStrings(value);
  };

  const handleChordRadioClick = (e) => {
    const selectedValue = e.target.value;

    const value = chordStrings.map((item) => {
      return {
        name: item.name,
        value: item.value,
        checked: item.value === Number(selectedValue) ? true : false,
      };
    });
    setChordStrings(value);
  };

  // 再生
  const playChord = () => {
    setChordNums(state);
    state.map((value) => {
      notes[value].currentTime = 0;
      notes[value].play();
    });
  };

  const updateChord = () => {
    var rootNum = 0;
    var chordType = "";
    var rootName = "";

    // trueの物を探す
    notesStrings.map((note) => {
      if (note.checked) {
        rootName = note.name;
        rootNum = note.value;
        return setCurrentNote(note.name);
      }
    });

    chordStrings.map((chord) => {
      if (chord.checked) {
        chordType = chord.name;
        displayChord = chord.name;
        return setCurrentChord(chord.name);
      }
    });
    const nextChordNums = [];
    switch (chordType) {
      case "maj":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        break;
      case "min":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 7);
        break;
      case "7":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        break;
      case "M7":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 11);
        break;
      case "m7":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        break;
      case "mM7":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 11);
        break;
      case "dim":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 6);
        nextChordNums.push(rootNum + 9);
        break;
      case "sus4":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 5);
        nextChordNums.push(rootNum + 7);
        break;
      case "7sus4":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 5);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        break;
      case "aug":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 8);
        break;
      case "m7(♭5)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 6);
        nextChordNums.push(rootNum + 10);
        break;
      case "6":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 9);
        break;
      case "add9":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 14);
        break;
      case "9":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        nextChordNums.push(rootNum + 14);
        break;
      case "7(♭9)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        nextChordNums.push(rootNum + 13);
        break;
      case "7(♯9)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 7);
        nextChordNums.push(rootNum + 10);
        nextChordNums.push(rootNum + 15);
        break;
      case "m(♭5)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 3);
        nextChordNums.push(rootNum + 6);
        break;
      case "(♯5)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 6);
        break;
      case "M7(♯5)":
        nextChordNums.push(rootNum);
        nextChordNums.push(rootNum + 4);
        nextChordNums.push(rootNum + 6);
        nextChordNums.push(rootNum + 11);
        break;
      default:
        break;
    }

    // CreateProjectコンポーネントのstateを更新
    handleChords(
      { rootName: rootName, chordType: chordType, chordNums: nextChordNums },
      btnNum
    );
    setState(nextChordNums);
  };

  // コードの選択
  const selectChord = (e) => {
    e.preventDefault();
    updateChord();
    handleCloseChordModal();
  };

  const bodyChord = (
    <div style={modalStyle} className={classes.paper}>
      <h5 className="modal-title card-title">基音</h5>
      <div className="modal-notes">
        <FormControl component="fieldset">
          <RadioGroup className="radio-group">
            {notesStrings.map((note, index) => (
              <FormControlLabel
                control={<Radio style={{ paddingTop: "0px" }} />}
                name={note.name}
                value={note.value}
                checked={note.checked}
                onChange={handleRootRadioClick}
                label={note.name}
                labelPlacement="top"
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <h5 className="modal-title modal-title-structure">構成</h5>
      <div className="modal-notes">
        <FormControl component="fieldset">
          <RadioGroup className="radio-group">
            {chordStrings.map((chord, index) => (
              <FormControlLabel
                classes={{
                  root: styles.formControlLabelRoot,
                  label: styles.formControlLabel,
                }}
                control={
                  <Radio
                    classes={{
                      root: styles.radio,
                      checked: styles.checked,
                    }}
                    style={{ paddingTop: "0px" }}
                  />
                }
                name={chord.name}
                value={chord.value}
                checked={chord.checked}
                onChange={handleChordRadioClick}
                label={chord.name}
                labelPlacement="top"
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="modal-btn-set">
        <Button
          onClick={handleCloseChordModal}
          className={classes.btnCancel}
          variant="outlined"
        >
          キャンセル
        </Button>
        <Button
          onClick={selectChord}
          className={classes.btnOk}
          variant="contained"
        >
          決定
        </Button>
      </div>
    </div>
  );

  var displayChord = "";

  switch (currentChord) {
    case "maj":
      displayChord = "";
      break;
    case "min":
      displayChord = "m";
      break;
    case "7":
      displayChord = "7";
      break;
    default:
      displayChord = currentChord;
      break;
  }

  var playButton = null;
  if (btnNum === playingNum) {
    playButton = (
      <Button className="btn-play-pushed" variant="outlined">
        {currentNote}
        {displayChord}
      </Button>
    );
  } else {
    playButton = (
      <Button className="btn-play" variant="outlined" onClick={playChord}>
        {currentNote}
        {displayChord}
      </Button>
    );
  }

  return (
    <div className="btn-set">
      <Button
        className={classes.btnChord}
        variant="outlined"
        onClick={playChord}
      >
        {currentNote}
        {displayChord}
      </Button>
      <Button className={classes.btnChord} onClick={handleOpenChordModal}>
        <HammerIcon />
      </Button>
      <Modal open={openChordModal} onClose={handleCloseChordModal}>
        {bodyChord}
      </Modal>
    </div>
  );
};

export default ButtonSet;
