import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ onSubmit, query, setQuery }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={5}>
          <Form onSubmit={onSubmit}>
            <Form.Row className="justify-content-center">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search something ..."
                  name="query"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
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
