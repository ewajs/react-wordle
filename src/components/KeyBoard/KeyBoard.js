import "./KeyBoard.css";
import useKeys from "../../hooks/useKeys";
import Key from "../Key/Key";

export default function KeyBoard({ onKeyPress }) {
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
          />
        ))}
      </div>
    );
  };

  return <div className="keyboard">{keys.map(makeKeyRow)}</div>;
}
