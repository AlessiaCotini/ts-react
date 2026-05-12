import { Card, Col, Container, Spinner } from "react-bootstrap";
import type { ISingleCard } from "../interfaceses/SingleCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const link = "https://api.spaceflightnewsapi.net/v4/articles";

const SingleDetails = function () {
  const params = useParams();
  const [article, setArticle] = useState<ISingleCard | null>(null);
  const [error, setError] = useState(false);

  const getArticle = () => {
    fetch(`${link}/${params.id}/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status.toString());
        }
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };
  useEffect(() => {
    getArticle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (error)
    return (
      <p className="text-center mt-5">Errore nel caricamento dell'articolo.</p>
    );
  if (!article)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );

  const nomeAutore = article.authors[0]?.name || "Autore non disponibile";

  return (
    <Container className="mt-5">
      <Col xs={12} md={8} className="mx-auto p-3">
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title className="fs-2">{article.title}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              {nomeAutore} - {article.news_site}
            </Card.Subtitle>
            <Card.Text>{article.summary}</Card.Text>
            <hr />
            <Card.Text className="small text-muted">
              Pubblicato il:{" "}
              {new Date(article.published_at).toLocaleDateString()}
            </Card.Text>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Leggi l'originale
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default SingleDetails;
