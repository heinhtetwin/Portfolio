import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import tailwindblog from "../../Assets/Projects/next_tailwind_ss.png"
import ayapay from "../../Assets/Projects/ayapay.png"
import noca from "../../Assets/Projects/noca.png"

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
              imgPath={ayapay}
              isBlog={false}
              title="AYAPAY Digital Wallet"
              description="A digital mobile wallet payment platform built for Myanmar. I've participated and worked as a crucial role, Senior DevOps engineer, in building this next generation mobile wallet platform."
              ghLink=""
              demoLink="https://ayapay.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noca}
              isBlog={false}
              title="NOCA Automation Platform"
              description="NOCA is an AI-powered automation platform where users can create many automation workflows from various SaaS like SalesForce, Google Drive and DropBox. I've involved as a Lead DevOps engineer in building this platform."
              ghLink=""
              demoLink="https://noca.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Heinux Blog"
              description="My Personal blog Website built with Netlify, focused on DevOps, Cloud Computing, and Linux System Administration. I created my blog site using Beautiful Jekyll template."
              ghLink="https://github.com/heinhtetwin/heinux-blog"
              demoLink="https://heinux-blogging.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tailwindblog}
              isBlog={false}
              title="Modernized Blog Site"
              description="A modernized blog website built with Nextjs and tailwind CSS framework. In this website, I've created a starter template for blogging platform."
              ghLink="https://github.com/heinhtetwin/tailwind-css-blog"
              demoLink="https://modern-starter-blog.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
