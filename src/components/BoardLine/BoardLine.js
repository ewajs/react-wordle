import "./BoardLine.css";

import BoardLetter from "../BoardLetter/BoardLetter";

export default function BoardLine({ length, word, targetWord }) {
  const determineMatch = (index) => {
    if (targetWord === undefined || !targetWord.includes(word[index]))
      return "";
    if (targetWord[index] === word[index]) return "match";
    // This is the partial match logic.
    const letters = [];
    // First create an array without the exact matches
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== targetWord[i]) letters.push(targetWord[i]);
    }

    // Now start removing already partialed matches up until index

    for (let i = 0; i < index; i++) {
      if (letters.includes(word[i]))
        letters.splice(letters.indexOf(word[i]), 1);
    }

    // Finally if the letter is still there, then it's a partial match
    return letters.includes(word[index]) ? "partial-match" : "";
  };

  const makeLetter = (i) => (
    <BoardLetter
      key={i}
      letter={word === undefined ? "" : word.length > i ? word[i] : ""}
      className={determineMatch(i)}
    />
  );
  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(makeLetter(i));
  }

  return <div className="line">{letters}</div>;
}
