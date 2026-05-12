import { useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
const link = "https://api.api-onepiece.com/v2/chapters/en";

interface ICharactersObj {
  id: number;
  chapter_number: string;
  title: string;
  description: string;
}

const Fetchcomponents = () => {
  const [onepiece, setCharacters] = useState<ICharactersObj[]>([]);
  const getCharacters = () => {
    fetch(link)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status.toString());
        }
      })
      .then((data) => {
        setCharacters(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <Row>
        {onepiece.map((characters) => {
          return (
            <Col key={characters.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{characters.title}</Card.Title>
                  <Card.Text>{characters.description}</Card.Text>
                  <Button variant="primary">Next</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Fetchcomponents;
