import "./Key.css";

export default function Key({ keyName, keyCode, onKeyPress, matched }) {
  return (
    <div
      className={`key ${matched}`}
      key={keyCode}
      onClick={() => onKeyPress(keyName)}
    >
      {keyName}
    </div>
  );
}
