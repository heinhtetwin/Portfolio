import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import tailwindblog from "../../Assets/Projects/next_tailwind_ss.png"

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
              imgPath={blog}
              isBlog={true}
              title="Heinux Blog"
              description="My Personal blog Website built with Netlify, focused on DevOps, Cloud Computing, and Linux System Administration. I created my blog site using Beautiful Jekyll template."
              ghLink="https://github.com/heinhtetwin/heinux-blog"
              demoLink="https://blog.heinhtetwin.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tailwindblog}
              isBlog={true}
              title="Heinux Blog New Design"
              description="A new Blog website built with Nextjs and tailwind CSS."
              ghLink="https://github.com/heinhtetwin/tailwind-css-blog"
              demoLink="https://heinuxblog.heinhtetwin.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
