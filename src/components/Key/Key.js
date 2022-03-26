import "./Key.css";

export default function Key({ keyName, keyCode, onKeyPress }) {
  return (
    <div className="key" key={keyCode} onClick={() => onKeyPress(keyName)}>
      {keyName}
    </div>
  );
}
