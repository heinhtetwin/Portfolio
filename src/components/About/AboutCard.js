import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Hein Htet Win </span>
            from <span className="purple"> Yangon, Myanmar.</span>
            <br />I am a DevOps Engineer from AYA Innovation Labs
            <br />
            <br />
            Apart from my job, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard Work always pays off!"{" "}
          </p>
          <footer className="blockquote-footer">Heinux</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
