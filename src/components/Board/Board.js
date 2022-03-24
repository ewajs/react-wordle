import "./Board.css";

import BoardLine from "../BoardLine/BoardLine";

export default function Board({ length, maxAttempts }) {
  const makeLine = () => <BoardLine length={length} />;

  const makeAttempts = () => {
    const attempts = [];
    for (let i = 0; i < maxAttempts; i++) {
      attempts.push(makeLine());
    }
    return attempts;
  };
  return <div className="board">{makeAttempts()}</div>;
}
