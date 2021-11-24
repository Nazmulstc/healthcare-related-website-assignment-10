import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Apointment from "./Apointment";
import FindConsultant from "./FindConsultant";
import OnlineService from "./OnlineService";

const Emargency = () => {
  return (
    <div className="row">
      <CardGroup className="container">
        <Card>
          <Card.Body>
            <Card.Title>
              <FindConsultant> </FindConsultant>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <OnlineService></OnlineService>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <Apointment></Apointment>
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Emargency;
