import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamad Ashraf </span>
            from <span className="purple"> Manchester, United Kingdom.</span>
            <br /><br />I'm an BSc <span className="purple">Software Engineering</span> student <span className="purple">at Manchester Metropolitan University.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> DIY Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <br>
          </br>
          <div className="quote">
            <p style={{ color: "rgb(155 126 172)", textAlign: "center"}}>
              "Code is the canvas where we paint the future, one algorithm at a time!"{" "}
            </p>
            <footer className="blockquote-footer">Hamad Ashraf</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
