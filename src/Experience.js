import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGlobe, FaCircle } from "react-icons/fa";
import Heading from "./Heading";
import { Modal, Button, Accordion } from "react-bootstrap";
import img from "./Images/logo.jpg";
import img2 from "./Images/logo2.jpg";

const ExperienceCard = () => {
  const [showE, setShowE] = useState(false);
  const handleCloseE = () => setShowE(false);
  const handleShowE = () => setShowE(true);
  const [showE1, setShowE1] = useState(false);
  const handleCloseE1 = () => setShowE1(false);
  // const handleShowE1 = () => setShowE1(true);
  const [showE2, setShowE2] = useState(false);
  const handleCloseE2 = () => setShowE2(false);
  const handleShowE2 = () => setShowE2(true);
  
  const handleShowE1 = () => {
    console.log("React.js skills modal opened!"); // Debugging log
    setShowE1(true);
  };
  
  const E1skills = [
    {
      title: "JavaScript",
      description:
        "Developed dynamic and interactive web applications using JavaScript.",
    },

    {
      title: "React.js",
      description:
        "Built responsive and high-performance user interfaces with React.js.",
    },
    {
      title: "Git",
      description: "Version control and collaboration using Git.",
    },
    {
      title: "GitHub",
      description:
        "Managed version control, collaborated on projects, and maintained repositories using GitHub.",
    }
,    
    {
      title: "Tailwind CSS",
      description:
        "Created highly responsive and customizable designs using Tailwind CSS.",
    },
    {
      title: "Redux",
      description:
        "Managed complex application state with Redux for predictable state management.",
    },

  ];



  const Eskills = [
    {
      title: "JavaScript",
      description:
        "Developed dynamic and interactive web applications with modern JavaScript (ES6+).",
    },
    {
      title: "HTML",
      description:
        "Structured and designed web pages using semantic HTML for accessibility and SEO.",
    },
    {
      title: "CSS",
      description:
        "Styled web applications using CSS, including responsive design techniques and pre-processors like SASS.",
    },
    {
      title: "jQuery",
      description:
        "Simplified DOM manipulation and event handling to enhance user interactions with jQuery.",
    },
    {
      title: "Bootstrap",
      description:
        "Built responsive and mobile-friendly web interfaces using Bootstrap components and utilities.",
    },
    {
      title: "GitHub",
      description:
        "Managed version control, collaborated on projects, and maintained repositories using GitHub.",
    },
    
  ];
  

  return (
    <div className="text-white m-4 mb-5">
      <Heading tittle={"Experience"} />
      <div
        className="container my-4 text-white bg-transparent"
        style={{ width: "50%" }}
      >
        <div className="card p-3 text-white bg-transparent">
          <div className="d-flex flex-row">
            <img className="companyImg mr-3" align="right" src={img} />
            <h4>The Entrepreneurship Network</h4>
          </div>

          <p className="text-secondary">7 mos</p>
          <div className="border-start ps-3">
            {/* Software Engineer E2 */}
            <div className="mb-4">
              <h5>React Developer Intern</h5>
              <p className="text-secondary">
                Jun 2024 - Dec 2024 · 7 mos | Delhi, India
              </p>
              <p className="skillCompany" onClick={handleShowE1}>
                <strong>Skills:</strong> React.js, JavaScript and +4 skills
              </p>
              <ul>
                <li>
                  Proficient in building dynamic and responsive web applications
                  using React.js.
                </li>
                <li>Building reusable and modular UI components.</li>
                <li>
                  Well-versed in Webpack for bundling and asset management.
                </li>
                <li>
                  Knowledge of React Router for seamless navigation in
                  single-page applications.
                </li>
                <li>
                  Experience in performance optimization and improving website
                  load times.
                </li>
                <li>
                  Familiar with responsive design, CSS frameworks, and UI
                  libraries like Bootstrap, Tailwind CSS.
                </li>
              </ul>
            </div>
            <Modal show={showE1} onHide={handleCloseE1} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Skills for React.js Intern at The Entrepreneurship Network
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            {E1skills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" align="right" src={img} />
                    {skill.description}.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
  
      </Modal>
         
          </div>
        </div>

        <div className="card p-3 text-white bg-transparent">
          <div className="d-flex flex-row">
            <img className="companyImg mr-3" align="right" src={img2} />
            <h4>Unified Mentor Private Limited </h4>
          </div>

          <p className="text-secondary"> 1 mos | </p>
          <div className="border-start ps-3">
            <div className="mb-4">
              <h5>
              Web Development Intern</h5>
              <p className="text-secondary">
                Feb 2024 - March 2024 · 1 mos | Gurugram, Haryana, India
              </p>
              <p className="skillCompany" onClick={handleShowE2}>
                <strong>Skills:</strong> JavaScript and +4 skills
              </p>
              <ul>
                <li>
                Structuring web pages with semantic elements for better accessibility and SEO.
                </li>
                <li>
                Styling web pages with responsive designs, Flexbox, Grid, animations, and media queries.

                </li>
                <li>
                Creating mobile-first, responsive web designs with pre-built components and utility classes.

                </li>
                <li>
                Adding interactivity and dynamic behavior using ES6+, DOM manipulation, and event handling.

                </li>
                <li>
                Responsive Design: Ensuring compatibility across different screen sizes and devices.

                </li>
                <li>Performance Optimization: Writing clean and efficient code for faster load times.
                </li>
              </ul>
            </div>
          
          
          </div>
          <Modal show={showE2} onHide={handleCloseE2} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
                       Skills for  Web Development Intern at Unified Mentor Private Limited 

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            {Eskills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" align="right" src={img2} />
                    {skill.description}.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
  
      </Modal>

        </div>
      </div>
     
      {/* <Modal show={showE2} onHide={handleCloseE2} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Skills for  Web Development Intern at Unified Mentor Private Limited 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">

          </Accordion>
        </Modal.Body>

      </Modal> */}

   
    </div>
  );
};

export default ExperienceCard;
