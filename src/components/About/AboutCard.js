import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple"> Hein Htet Win </span>
            from Yangon, Myanmar.
            <br />
            <br />I am a result-driven <span className="purple"> DevOps Engineer </span> with over 4 years of experience in different industries such as FinTech, Banking and ISP. I am a life-long learner who eagers to develop my skills and contribute to the community with what I know.
            <br />
            <br />
            Apart from my job, some other activities that I love to do - 
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
