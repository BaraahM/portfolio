import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/baraa-lgo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import tryhackmeIcon from "../assets/img/new tryhackme.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import mediumIcon from "../assets/img/medium new.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/baraah-mekyash/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://tryhackme.com" target="_blank" rel="noreferrer"><img src={tryhackmeIcon} alt="TryHackMe" /></a>
              <a href="https://github.com/BaraahM" target="_blank" rel="noreferrer"><img src={navIcon3} alt="GitHub" /></a>
              <a href="https://medium.com/@baraahmekyash" target="_blank" rel="noreferrer"><img src={mediumIcon} alt="Medium" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
