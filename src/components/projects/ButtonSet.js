import "../../styles/ButtonSet.css";
import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import HammerIcon from "./HammerIcon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { createNextChord } from "./ChordModel.js";

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
    color: "#1a81e8",
    textTransform: "none",
    border: "1px solid #1a81e8",
    "&:hover": {
      color: "#589def",
      border: "1px solid #589def",
    },
  },
  btnOk: {
    backgroundColor: "#1a81e8",
    color: "#e6f0fa",
    border: "1px solid #1a81e8",
    "&:hover": {
      backgroundColor: "#589def",
      color: "e6f0fa",
      border: "1px solid #589def",
    },
  },
  radio: {
    "&$checked": {
      color: "#1a81e8",
    },
  },
  checked: {},
}));

const ButtonSet = ({ btnNum, handleChords, setChordNums, randomChord }) => {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // モーダルスタイル
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  // モーダル開閉
  const handleModal = (state) => {
    setModalIsOpen(state);
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

  // noteStrings, chordStringsを元にstate更新
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

    const nextChordNums = createNextChord(rootNum, chordType);

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
    setModalIsOpen(false);
  };

  // propsで渡されたrandomChordを使ってここのボタン情報を更新する
  useEffect(() => {
    const rootNum = randomChord[0];
    const chordType = randomChord[1];
    const rootName = notesStrings.find((v) => v.value === rootNum).name;

    shuffleRootRadio(rootNum);
    shuffleChordRadio(chordType);

    setCurrentNote(rootName);
    setCurrentChord(chordType);

    const nextChordNums = createNextChord(rootNum, chordType);

    // CreateProjectコンポーネントのstateを更新
    handleChords(
      { rootName: rootName, chordType: chordType, chordNums: nextChordNums },
      btnNum
    );
    setState(nextChordNums);
  }, [randomChord]);

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

  const bodyChord = (
    <div style={modalStyle} className={classes.paper}>
      <h5 className="modal-title card-title">Root</h5>
      <div className="modal-notes">
        <FormControl component="fieldset">
          <RadioGroup className="radio-group">
            {notesStrings.map((note, index) => (
              <FormControlLabel
                control={
                  <Radio
                    disableRipple
                    classes={{ root: classes.radio, checked: classes.checked }}
                    style={{ paddingTop: "0px" }}
                  />
                }
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
      <h5 className="modal-title modal-title-structure">Chord Type</h5>
      <div className="modal-notes">
        <FormControl component="fieldset">
          <RadioGroup className="radio-group">
            {chordStrings.map((chord, index) => (
              <FormControlLabel
                control={
                  <Radio
                    disableRipple
                    classes={{ root: classes.radio, checked: classes.checked }}
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
          onClick={handleModal.bind(this, false)}
          className={classes.btnCancel}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={selectChord}
          className={classes.btnOk}
          variant="contained"
        >
          OK
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
      <Button
        className={classes.btnChord}
        onClick={handleModal.bind(this, true)}
      >
        <HammerIcon />
      </Button>
      <Modal open={modalIsOpen} onClose={handleModal.bind(this, true)}>
        {bodyChord}
      </Modal>
    </div>
  );
};

export default ButtonSet;
