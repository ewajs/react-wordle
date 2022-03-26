import "./Board.css";

import BoardLine from "../BoardLine/BoardLine";

export default function Board({
  length,
  maxAttempts,
  targetWord,
  currentWord,
  currentAttempt,
  attempts,
}) {
  const makePastLine = (i) => {
    return (
      <BoardLine
        length={length}
        key={i}
        word={attempts[i]}
        targetWord={targetWord}
      />
    );
  };

  const makeCurrentLine = (i) => {
    return <BoardLine length={length} key={i} word={currentWord} />;
  };

  const makeEmptyLine = (i) => {
    return <BoardLine length={length} key={i} />;
  };

  const makeAttemptLines = () => {
    const attemptLines = [];
    for (let i = 0; i < maxAttempts; i++) {
      if (i < currentAttempt) attemptLines.push(makePastLine(i));
      if (i === currentAttempt) attemptLines.push(makeCurrentLine(i));
      if (i > currentAttempt) attemptLines.push(makeEmptyLine(i));
    }
    return attemptLines;
  };
  return <div className="board">{makeAttemptLines()}</div>;
}
