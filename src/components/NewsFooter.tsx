import { Container, Row, Col } from "react-bootstrap";

const NewsFooter = function () {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <small>&copy; {new Date().getFullYear()} - Le news</small>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsFooter;
