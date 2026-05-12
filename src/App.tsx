import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import SinglePage from "./components/SinglePage";
import NewsPaperNavbar from "./components/NewsPaperNavbar";
import NewsFooter from "./components/NewsFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleDetails from "./components/SingleDetails";
function App() {
  return (
    <BrowserRouter>
      <NewsPaperNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid>
              <Row className="justify-content-center">
                <SinglePage />
              </Row>
            </Container>
          }
        ></Route>
        <Route path="details/:id" element={<SingleDetails />}></Route>
      </Routes>
      <NewsFooter />
    </BrowserRouter>
  );
}

export default App;
