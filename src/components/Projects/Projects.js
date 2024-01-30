import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import crypto from "../../Assets/Projects/crypto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Random Password Generator "
              description="This project was created to randomly generate passwords."
              ghLink="https://github.com/h-ashraf/RandomPassword"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DBMS for HR"
              description="A database management system for hr department to manage the employee and other information about the organisation."
              ghLink="https://github.com/h-ashraf/DBMS-HR"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={crypto}
            isBlog={false}
            title="CryptoTracker"
            description="A tracker created using SwiftUI, which allows users to keep track of their crypto currencies. All currencies cannot be bought on a single place therefore this app allows the user to see all the currencies."
            ghLink="https://github.com/h-ashraf/Crypto"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h2 style={{color: "whitesmoke"}}>More Exciting Projects Coming Soon! </h2>
            <p style={{ color: "white" }}>
              Stay tuned for new and exciting projects that will be uploaded shortly.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
