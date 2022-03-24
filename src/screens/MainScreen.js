import "./MainScreen.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Board from "../components/Board/Board";

export default function MainScreen() {
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
            <Board length={5} maxAttempts={5} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
