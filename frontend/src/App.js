import { useState } from "react";
import { buildEndpoint } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const deleteImageById = (id) =>
    setImages(images.filter((image) => image.id !== id));

  const searchOnSubmit = (event) => {
    // Prevent default behavior
    event.preventDefault();

    const randomPhotoEndpoint = buildEndpoint(
      "random",
      `query=${query}&orientation=landscape`
    );
    
    fetch(randomPhotoEndpoint)
      .then((res) => res.json())
      .then((result) => {
        if (!result.errors) {
          setQuery("");
          setImages([{ ...result }, ...images]);
        }
      });
  };

  return (
    <>
      <header className="mb-4">
        <Navigation title="Images Gallery" />
      </header>
      <Search onSubmit={searchOnSubmit} setQuery={setQuery} query={query} />
      <Container className="mt-5">
        <Row xs={1} md={2} xl={3} className="align-items-stretch">
          {images.map((image) => (
            <Col className="mb-5">
              <ImageCard meta={image} deleteImageById={deleteImageById} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
