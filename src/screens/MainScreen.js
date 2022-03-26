import "./MainScreen.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Board from "../components/Board/Board";
import KeyBoard from "../components/KeyBoard/KeyBoard";

import { useState } from "react";

import useWord from "../hooks/useWord";

export default function MainScreen() {
  const { loading, targetWord, words } = useWord(5);

  console.log({ loading, targetWord });
  const maxAttempts = 5;

  const [currentWord, setCurrentWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [attempts, setAttempts] = useState([]);

  // Updater function that will add the key passed in to current word (or delete last letter if Del)
  const onKeyPress = (k) => {
    if (
      k !== "Enter" &&
      (currentWord.length < targetWord.length || k === "Del")
    )
      setCurrentWord((cW) =>
        k === "Del" ? cW.slice(0, -1) : cW + k.toLowerCase()
      );

    if (k === "Enter" && currentWord.length === targetWord.length)
      evaluateSubmission();
  };

  const evaluateSubmission = () => {
    //console.log({ currentWord, targetWord, attempts, maxAttempts });
    if (currentWord === targetWord) {
      console.log("You Win!!");
      return;
    } else if (currentAttempt + 1 < maxAttempts) {
      if (words.includes(currentWord)) {
        setAttempts((a) => [...a, currentWord]);
        setCurrentAttempt((cA) => cA + 1);
        setCurrentWord("");
      } else {
        console.log("Not a word!");
      }
    } else {
      console.log("You lose!");
    }
  };

  return (
    <>
      <Container className="wordle-container" fluid>
        <Navbar bg="dark" variant="dark" expand="xl" className="wordle-nav">
          <Container>
            <Navbar.Brand>React-Wordle</Navbar.Brand>
          </Container>
        </Navbar>
        <Row className="align-items-start wordle">
          <Col>
            <Board
              length={targetWord.length}
              maxAttempts={maxAttempts}
              currentWord={currentWord}
              currentAttempt={currentAttempt}
              targetWord={targetWord}
              attempts={attempts}
            />
            <KeyBoard onKeyPress={onKeyPress} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
