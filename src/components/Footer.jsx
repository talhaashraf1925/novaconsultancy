import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
      <footer className="bg-[#002366] text-[#BEC6DA] py-4">
        <Container className="pt-[80px]">
          <Row className="justify-content-center pb-5">
            <Col lg={3} md={4}>
              <div>
                <img src="/images/logo.png" className="img-fluid w-50" alt="" />
                <p className="text-[19px]">
                  We translate ambitious ideas into brilliant digital solutions.
                  Our expert team architects scalable, secure, and user-centric
                  products that drive growth and define industries.
                </p>
                <div className="d-flex gap-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="border p-1 text-[25px]"
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="border p-1 text-[25px]"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="border p-1 text-[25px]"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="border p-1 text-[25px]"
                  />
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="pt-[40px]">
                <h3 className="text-white">Insight</h3>
                <div style={{ lineHeight: "40px" }}>
                  <span className="text-[19px] fw-bold">Home</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Services</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Projects</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Team</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Blog</span>
                  <br></br>
                </div>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="pt-[40px]">
                 <h3 className="text-white text-[24px]">Help and Support</h3>
                <div style={{ lineHeight: "40px" }}>
                  <span className="text-[19px] fw-bold">
                    Terms and Condition
                  </span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Privacy Policy</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">FAQs</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">About</span>
                  <br></br>
                  <span className="text-[19px] fw-bold">Contact</span>
                  <br></br>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="pt-[40px] ms-4">
               <h3 className="text-white">Contact Us</h3>
                 <div className="info d-flex gap-1  rounded-4">
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[20px] text-[#BEC6DA]"
                    />
                  </div>
                  <div className="mt-1">
                    <p>+ 44 7517231456</p>
                  </div>
                </div>
                <div className="info d-flex gap-1  rounded-4">
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[20px] text-[#BEC6DA]"
                    />
                  </div>
                  <div className="mt-1">
                    <p>Support@novaconsultancyy.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr/>
          <div className="text-center pt-3">
            <p>© 2025 Nova Consultancy. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
  );
}
