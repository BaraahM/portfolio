import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import claudeImg from "../assets/img/claude.png";
import utmFoodImg from "../assets/img/utmfood.jpg";
import nancyImg from "../assets/img/nancy.jpg";
import mlPhishingImg from "../assets/img/ML-Phishing.png";
import subwayImg from "../assets/img/subwayy.png";
import siemImg from "../assets/img/siem.png";
import ovpnImg from "../assets/img/ovpn.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Automated Pipeline",
      description: "A web app that allows users to upload Word/PDF documents, sends them to Claude API for enhancement, displays old vs enhanced versions side-by-side, and enables downloading the enhanced document as a JSON file to preserve rich text formatting",
      imgUrl: claudeImg,
      category: 'web',
    },
    {
      title: "UTM Food",
      description: "A food delivery app designed specifically for students inside UTM campus, built with Flutter for cross platform mobile development and Laravel for the admin panel",
      imgUrl: utmFoodImg,
      link: "https://github.com/NinjaTurtles0/main",
      category: 'web',
    },
    {
      title: "Nancy Pelosi Trades Tracker",
      description: "Python automation tool for tracking congressional trades",
      imgUrl: nancyImg,
      link: "https://github.com/BaraahM/Nancy-Pelosi-Tracker",
      category: 'fun',
    },
    {
      title: "Comparing different ML algorithms for Phishing Attacks Detection",
      description: "Research book on ML algorithms for cybersecurity",
      imgUrl: mlPhishingImg,
      category: 'fun',
    },
    {
      title: "Playing Subway Surfer with Image detection",
      description: "On-going project",
      imgUrl: subwayImg,
      category: 'fun',
    },
    {
      title: "Local SIEM",
      description: "Home‑lab SIEM using ELK (Elasticsearch, Logstash, Kibana) + Filebeat on Docker; collect, parse and visualize logs.",
      imgUrl: siemImg,
      link: "https://github.com/BaraahM/SIEM",
      category: 'cyber',
    },
    {
      title: "VPN",
      description: "OpenVPN server setup guide with Easy-RSA for secure remote access and client configuration",
      imgUrl: ovpnImg,
      link: "https://github.com/BaraahM/Building-VPN",
      category: 'cyber',
    },
  ];

  // Group projects by category for tabs
  const tab1Projects = projects.filter(p => p.category === 'web');
  const tab2Projects = projects.filter(p => p.category === 'fun');
  const tab3Projects = projects.filter(p => p.category === 'cyber');

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Fun Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cybersecurity</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          tab1Projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          tab2Projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index + 3}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                        {
                          tab3Projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index + 6}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
    </section>
  )
}
