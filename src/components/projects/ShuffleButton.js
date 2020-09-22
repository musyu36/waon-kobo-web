import React from "react";
import ShuffleIcon from "./ShuffleIcon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btnShuffle: {
    display: "block",
    margin: "0 auto 16px",
    textTransform: "none",
    lineHeight: "normal",
    "&:hover": {
      backgroundColor: "#fcfdff",
    },
    "&:focus": {
      backgroundColor: "#fcfdff",
    },
  },
}));

const ShuffleButton = ({ shuffleChords }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.btnShuffle}
        variant="outlined"
        type="button"
        onClick={shuffleChords}
      >
        <ShuffleIcon />
      </Button>
    </>
  );
};

export default ShuffleButton;
