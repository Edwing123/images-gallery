import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ meta, deleteImageById }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={meta.urls.small} />
      <Card.Body>
        <Card.Title>Photo by {meta.user.username}</Card.Title>
        <Card.Text className="mb-0 text-black-50">
          <span className="">description</span>
        </Card.Text>
        <Card.Text>{meta.description || meta.alt_description}</Card.Text>
        <Button variant="danger" onClick={() => deleteImageById(meta.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
