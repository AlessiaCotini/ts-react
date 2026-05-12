import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
