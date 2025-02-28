import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Achievements.css";
import Heading from "./Heading";
import { Button, Modal } from "react-bootstrap";
// import img3 from './Images/image.png'
import img1 from './Images/Geek.jpg'
import img2 from './Images/Tap.jpg'

const Achievements = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleShowModal1 = (title, skills, logo) => {
        setShowModal1(true);
      };
    
      const handleCloseModal1 = () => setShowModal1(false);

      const handleShowModal2 = (title, skills, logo) => {
        setShowModal2(true);
      };
    
      const handleCloseModal2 = () => setShowModal2(false);

      const handleShowModal3 = (title, skills, logo) => {
        setShowModal3(true);
      };
    
      const handleCloseModal3 = () => setShowModal3(false);
            

  return (
    <div className="m-3 text-light">
      <Heading tittle={"Achievements & Certifications"} />
      <div className="row mb-4 mt-5 py-3">
        <div className="col-md-4">
          <div className="card shadow-sm experCard " onClick={handleShowModal1}>
            <div className="card-body">
              <div className="d-flex flex-row">
                <img
                  width="48"
                  src="https://media.licdn.com/dms/image/v2/D560BAQFEl-c-MprDFQ/company-logo_100_100/company-logo_100_100/0/1735198653833/geeksforgeeks_logo?e=1744848000&amp;v=beta&amp;t=VsYQPQI0v5MyTY9NwrGGq90eGUfjC6SrV_8fGeX8Lvc"
                  loading="lazy"
                  height="48"
                  alt="GeeksforGeeks logo"
                  id="ember391"
                  class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"
                ></img>
                <h5 className="card-title mt-2 ml-4">GeeksforGeeks</h5>
              </div>
              <p className="card-text mb-3">
                Skills: JavaScript, HTML5, Git, React.js, CSS, Bootstrap,
                Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm experCard" onClick={handleShowModal2}>
            <div className="card-body">
              <div className="d-flex flex-row">
              <img width="48" src="https://imgproxy.learnyst.com/https://asset-cdn.learnyst.com/assets/schools/134719/schoolLogo/200_200_e7ma0m.png?w=100&h=48&resizetype=fit" loading="lazy" height="48" alt="Tap Academy logo" id="ember397" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"/>
                <h5 className="card-title mt-2 ml-4">Tap Academy</h5>
              </div>
              <p className="card-text mb-3">
                Skills: HTML5, CSS, Bootstrap, SQL, Java,JavaScript
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="card shadow-sm experCard"onClick={handleShowModal3}>
            <div className="card-body">
            <div className="d-flex flex-row">
            <img width="48" src="https://media.licdn.com/dms/image/v2/D4D0BAQEQIEKSYW75kg/company-logo_100_100/company-logo_100_100/0/1692192268681?e=1744848000&amp;v=beta&amp;t=8jPVmUlGbsaqwVJHe87InyHsqG2Guv83z6RN3kBABb4" loading="lazy" height="48" alt="Cutshort logo" id="ember403" class="ivm-view-attr__img--centered EntityPhoto-square-3   evi-image lazy-image ember-view"/>
                <h5 className="card-title mt-2 ml-4">React JS - Cutshort</h5>
              </div>
              <p className="card-text mb-3">Skills: REACT.JS, SASS</p>
            </div>
          </div>
        </div> */}
      </div>

      <h2 className="text-center my-5">GitHub Achievements</h2>

      <div className="text-center mb-4">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=samikshasahare31&"
          alt="GitHub Streak Stats"
          className="img-fluid"
        />
      </div>

      <div className="text-center mb-4">
        <img
          src="https://komarev.com/ghpvc/?username=samikshasahare31&label=Profile%20views&color=0e75b6&style=flat"
          alt="Profile Views"
          className="img-fluid"
        />
      </div>
      <div className="text-center">
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src="https://github-profile-trophy.vercel.app/?username=samikshasahare31"
            alt="GitHub Trophies"
            className="img-fluid"
          />
        </a>
      </div>
      <Modal show={showModal1} onHide={handleCloseModal1} centered>
        <Modal.Header closeButton>
          <Modal.Title>Geeks for Geeks Certifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
          src={img1}
          alt="Certifications Views"
          className="img-fluid"
        />
        </Modal.Body>
      </Modal>
      <Modal show={showModal2} onHide={handleCloseModal2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tap Academy Certifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
          src={img2}
          alt="Certifications Views"
          className="img-fluid"
        />
        </Modal.Body>
      </Modal>
      {/* <Modal show={showModal3} onHide={handleCloseModal3} centered>
        <Modal.Header closeButton>
        <Modal.Title>React JS - Cutshort Certifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
          // src={img3}
          alt="Certifications Views"
          className="img-fluid"
        />
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default Achievements;
