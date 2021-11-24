import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { Title, Url } = props.department;
  
  return (
    <div>
      <Col>
        <Card className="card-style">
          <Card.Img width="100%" height="250" variant="top" src={Url} />
          <Card.Body>
            <Card.Title className="text-center">
              <Link to="/department">{Title}</Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Cart;
