import "./KeyBoard.css";
import useKeys from "../../hooks/useKeys";
import Key from "../Key/Key";

export default function KeyBoard({ onKeyPress, matchedLetters }) {
  const keys = useKeys();

  const makeKeyRow = (keyRow, i) => {
    return (
      <div className="key-row" key={i}>
        {keyRow.map((key) => (
          <Key
            keyCode={key.keyCode}
            keyName={key.keyName}
            key={key.keyCode}
            onKeyPress={onKeyPress}
            matched={
              matchedLetters.hasOwnProperty(key.keyName.toLowerCase())
                ? matchedLetters[key.keyName.toLowerCase()]
                : ""
            }
          />
        ))}
      </div>
    );
  };

  return <div className="keyboard">{keys.map(makeKeyRow)}</div>;
}
