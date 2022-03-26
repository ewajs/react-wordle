import "./MainScreen.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Board from "../components/Board/Board";
import KeyBoard from "../components/KeyBoard/KeyBoard";

import { useState } from "react";

import useWord from "../hooks/useWord";

export default function MainScreen() {
  // Wordle Logic
  const maxAttempts = 5;
  const { loading, targetWord, words } = useWord(5);
  const [currentWord, setCurrentWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  // UI
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => setShowModal(false);

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
      setModalMessage("You won!!!");
      setShowModal(true);
      setIsPlaying(false);
      return;
    } else if (currentAttempt + 1 < maxAttempts) {
      if (words.includes(currentWord)) {
        setAttempts((a) => [...a, currentWord]);
        setCurrentAttempt((cA) => cA + 1);
        setCurrentWord("");
      } else {
        setModalMessage(`${currentWord.toUpperCase()} is not a valid word!`);
        setShowModal(true);
      }
    } else {
      setModalMessage(`You lost!! The word was ${targetWord.toUpperCase()}.`);
      setShowModal(true);
      setIsPlaying(false);
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
            {isPlaying ? (
              <KeyBoard onKeyPress={onKeyPress} />
            ) : (
              <Row>
                <Col style={{ textAlign: "center", marginTop: "20px" }}>
                  <p>The word was {targetWord.toUpperCase()}</p>
                  <Button
                    variant="primary"
                    onClick={() => window.location.reload()}
                  >
                    Play Again
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>React Wordle by ewajs</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
