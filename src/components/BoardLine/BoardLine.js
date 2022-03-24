import "./BoardLine.css";

import BoardLetter from "../BoardLetter/BoardLetter";

export default function BoardLine({ length }) {
  const makeLetter = () => <BoardLetter />;
  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(makeLetter());
  }

  return <div className="line">{letters}</div>;
}
