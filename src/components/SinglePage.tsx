import { Card } from "react-bootstrap";
import type { ISingleCard } from "../interfaceses/SingleCard";
import { useState } from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const link = "https://api.spaceflightnewsapi.net/v4/articles";

const SinglePage = function () {
  const [news, setNews] = useState<ISingleCard[]>([]);
  const getNews = () => {
    fetch(link)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status.toString());
        }
      })
      .then((data) => {
        setNews(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  return news.map((article) => {
    const nomeAutore = article.authors[0].name;
    return (
      <Col xs={12} md={6} lg={4} className="p-3">
        <Card className="h-100 justify-content-between" key={article.id}>
          <Card.Img variant="top" src={article.image_url} className="h-50" />
          <Card.Body>
            <Card.Title>{nomeAutore}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Card.Text>{article.published_at}</Card.Text>
            <Link to={`/details/${article.id}`} className="btn btn-primary">
              DETTAGLIO ARTICOLO
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};
export default SinglePage;
