import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GoCheck } from "react-icons/go";

function CertCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Button variant="primary" href={props.credlink} target="_blank">
          <GoCheck /> &nbsp;
          {"Verify"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CertCards;
