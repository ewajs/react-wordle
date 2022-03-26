import "./BoardLetter.css";

export default function BoardLetter({ letter, className }) {
  return <span className={"letter " + className}>{letter}</span>;
}
