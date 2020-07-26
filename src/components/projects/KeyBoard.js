import React from "react";
import "../../styles/KeyBoard.css";

const KeyBoard = (props) => {
  const { chords } = props;

  return (
    <div className="keyboard">
      <span className="keyboard-shadow">
        <div className="key">
          {chords.includes(0) ? (
            <div className="white_key active first-key"></div>
          ) : (
            <div className="white_key first-key"></div>
          )}
          {chords.includes(1) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(2) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(3) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(4) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(5) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(6) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(7) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(8) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(9) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(10) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(11) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(12) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(13) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(14) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(15) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(16) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(17) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(18) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(19) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(20) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(21) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(22) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(23) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(24) ? (
            <div className="white_key active"></div>
          ) : (
            <div className="white_key"></div>
          )}
          {chords.includes(25) ? (
            <div className="black_key active"></div>
          ) : (
            <div className="black_key"></div>
          )}
        </div>
        <div className="key">
          {chords.includes(26) ? (
            <div className="white_key active last-key"></div>
          ) : (
            <div className="white_key last-key"></div>
          )}
        </div>
      </span>
    </div>
  );
};

export default KeyBoard;
