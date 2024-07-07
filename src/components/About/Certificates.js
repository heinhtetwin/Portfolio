import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertCards from "./CertificateCards";
import cka from "../../Assets/Badges/CKA.png";
import aws_saa from "../../Assets/Badges/AWS-SAA.png"
import lfcs from "../../Assets/Badges/LFCS.png"
import pca from "../../Assets/Badges/PCA.png"
import rhcsa from "../../Assets/Badges/RHCSA.png"
import aws_soa from "../../Assets/Badges/AWS-SOA.png"
import aws_da from "../../Assets/Badges/AWS-DA.png"
import aws_dp from "../../Assets/Badges/AWS-DP.png"
import ckad from "../../Assets/Badges/CKAD.png"

function Certificates() {
  return (
        <p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={aws_dp}
              credlink="https://www.credly.com/badges/49df6d4f-23bb-4ccf-bafb-e17809e12364/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={ckad}
              credlink="https://www.credly.com/badges/43de0523-7dc6-48bd-8907-792489c23de9/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={cka}
              credlink="https://www.credly.com/badges/975edf51-0c27-4d85-a484-fb4e0a31c9df/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={aws_saa}
              credlink="https://www.credly.com/badges/25bb026f-c522-4740-975b-f46313526899/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={aws_soa}
              credlink="https://www.credly.com/badges/e752262a-395d-4e2b-b4f7-3aa5330fc97b/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={aws_da}
              credlink="https://www.credly.com/badges/5cbb54c0-2b36-4a97-8a5c-30ec8daf3984/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={lfcs}
              credlink="https://www.credly.com/badges/1835cbba-4189-4239-a1f1-8adcd202447c/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={rhcsa}
              credlink="https://www.credly.com/badges/ef3974d3-f287-49b3-a799-360794e72f70/public_url"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={pca}
              credlink="https://www.credly.com/badges/0336b1e1-e8ef-425a-a476-b6828120b788/public_url"
            />
          </Col>
        </Row>
        </p>
  );
}

export default Certificates;
