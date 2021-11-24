import React from "react";
import { Card, Col } from "react-bootstrap";

const Lab = (props) => {
  console.log(props);
  const { Title, Url } = props.lab;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img width="200" height="300" variant="top" src={Url} />
          <Card.Body>
            <Card.Title className="text-center">{Title}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Lab;
