import "./BoardLine.css";

import BoardLetter from "../BoardLetter/BoardLetter";

export default function BoardLine({ length, word, targetWord }) {
  const makeLetter = (i) => (
    <BoardLetter
      key={i}
      letter={word === undefined ? "" : word.length > i ? word[i] : ""}
      className={
        targetWord === undefined
          ? ""
          : targetWord[i] === word[i]
          ? "match"
          : targetWord.includes(word[i])
          ? "partial-match"
          : ""
      }
    />
  );
  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(makeLetter(i));
  }

  return <div className="line">{letters}</div>;
}
