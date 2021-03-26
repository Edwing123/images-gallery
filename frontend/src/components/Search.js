import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={5}>
          <Form>
            <Form.Row className="justify-content-center">
              <Col>
                <Form.Control placeholder="Cats, dogs, houses ..." />
              </Col>
              <Col xs={"auto"}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
