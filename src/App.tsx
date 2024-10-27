import "./App.scss";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import foto1 from "./assets/images/1b392776-9ade-4188-b362-1508c57e5e31.jpg";
import foto2 from "./assets/images/project1.jpg";
import foto3 from "./assets/images/project2.jpg";
import foto4 from "./assets/images/project3.jpg";
import foto5 from "./assets/images/project4.jpg";

import {
  faClock,
  faDiagramProject,
  faUsers,
  faChevronDown,
  faUser,
  faCalendar,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  useEffect(() => {
    const typeLetters = (text: string) => {
      const element = document.getElementById("typing-text");
      if (!element) return;

      element.innerHTML = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML = text.substring(0, index + 1);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100); // 0.10 secondi
    };

    typeLetters("Fabrizio Recchia");
  }, []);
  return (
    <>
      <body>
        <header className="header vh-100 text-center position-relative">
          <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
            <h5 className="text-primary fs-3 fw-bold text-uppercase">
              Hello, World.
            </h5>
            <h1 id="typing-text" className="display-1 fw-bold text-white"></h1>

            <p className="roles text-white text-uppercase fs-4">
              <span>Front-End Web Developer</span>
            </p>

            <a href="#about" className="btn btn-outline-light btn-lg mt-3">
              <div className="d-flex">
                <div className="me-3">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div className="text-start">
                  <span>More About Me</span>
                </div>
              </div>
            </a>

            <div className="social d-flex gap-3 position-absolute">
              <a href="https://github.com/Fabrizio994?tab=repositories">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  style={{ color: "#74C0FC" }}
                />
              </a>
            </div>
          </div>
        </header>

        {/* <!-- About --> */}
        <section id="about" className="about bg-light py-5">
          <div className="container">
            <div className="text-center">
              <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">Let me introduce myself.</h2>
            </div>
            <div className="about-content d-flex gap-5 align-items-center h-100">
              <img
                src={foto1}
                alt="Myfoto"
                className="about-img img-fluid rounded-circle"
              />
              <p className="lead">
                I am a Front End developer from Italy. <br />I have a basic
                Knowledge with HTML, CSS, JavaScript, React and Bootstrap.{" "}
                <br />I am currently working as a construction worker, but I am
                looking to transition into a career in web development. <br />I
                am a self-taught developer and I am always looking to learn new
                things and improve my skills. <br />I am passionate about web
                development and I am excited to see where this journey takes me.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Profile & Skills --> */}
        <section className="profile my-6">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 infoCont">
                <div>
                  <h3 className="text-uppercase fw-bold">Profile</h3>
                  <p>
                    Here is some more info about myself to help you get to know
                    me better.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item mb-3">
                    <h5 className="text-transform">
                      <FontAwesomeIcon icon={faUser} /> Full Name:
                    </h5>
                    <p>Fabrizio Recchia</p>
                  </li>
                  <li className="list-group-item mb-3">
                    <h5 className="text-transform">
                      <FontAwesomeIcon icon={faCalendar} /> Birth Date:
                    </h5>
                    <p>25/09/1994</p>
                  </li>
                  <li className="list-group-item mb-3">
                    <h5 className="text-transform">
                      <FontAwesomeIcon icon={faEnvelope} /> Email:
                    </h5>
                    <p>fabrizio643@hotmail.it</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="text-uppercase fw-bold">Skills</h3>
                <p>
                  Here is a list of my skills with these dumb percentages that
                  don't mean anything 😉
                </p>
                <h5>
                  <FontAwesomeIcon icon={faCheck} /> HTML 5
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "70%" }}>
                    70%
                  </div>
                </div>

                <h5>
                  <FontAwesomeIcon icon={faCheck} /> CSS
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "65%" }}>
                    65%
                  </div>
                </div>

                <h5>
                  <FontAwesomeIcon icon={faCheck} /> JavaScript
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "60%" }}>
                    60%
                  </div>
                </div>

                <h5>
                  <FontAwesomeIcon icon={faCheck} /> Bootstrap
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "65%" }}>
                    65%
                  </div>
                </div>

                <h5>
                  <FontAwesomeIcon icon={faCheck} /> React
                </h5>
                <div
                  className="progress mb-4"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "60%" }}>
                    60%
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="col-12">
                <a
                  href="#form"
                  className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2"
                >
                  Hire Me Now
                </a>
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:b7ad76c5-55f2-4ebe-aaff-437a8f59390b"
                  className="btn btn-dark btn-lg text-uppercase mx-3 my-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="./assets/pdf1.pdf"
                >
                  Watch my CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Portfolio --> */}
        <section className="portfolio py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">Portfolio</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">Check Out My Work</h2>
              <p className="lead">Here is a small sample of my projects.</p>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="project shadow-lg rounded-5">
                  <a
                    href="https://github.com/Fabrizio994/Progetto-Education"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={foto2}
                      alt="App cambiamento climatico"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="project shadow-lg rounded-5">
                  <a
                    href="https://github.com/Fabrizio994/Meditation-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={foto3}
                      alt="App meditazione"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="project shadow-lg rounded-5">
                  <a
                    href="https://github.com/Fabrizio994/Progetto-JavaScript-Advanced-di-Fabrizio-Recchia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={foto4}
                      alt="Category book search"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="project shadow-lg rounded-5">
                  <a
                    href="https://github.com/Fabrizio994/Js_basic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={foto5}
                      alt="A simple counter"
                      className="img-fluid rounded-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Styleshout --> */}
        <section className="styleshout text-bg-dark bg-gradient p-6 text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Shoutout to StyleShout</h1>
                <hr className="w-25 mx-auto" />
                <p className="lead mb-5">
                  Styleshout is a place for Free HTML5 Templates and Free
                  Wordpress. This design was inspired by one of their templates.
                  Check them out for templates to use and get inspiration from.
                </p>
                <a
                  href="https://styleshout.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-uppercase mx-3 my-2 StyleShout-btn"
                >
                  StyleShout
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services --> */}
        <section className="services text-bg-dark py-5 position-relative">
          <div className="container position-relative">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">Services</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">What Can I Do For You?</h2>
            </div>
            <div className="flex">
              <div className="justify-center text-center">
                <i className="fas fa-code fa-3x text-primary mb-3"></i>
                <hr className="w-25 mx-auto" />
                <p className="fs-5">
                  I can create responsive and interactive websites using HTML,
                  CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Stats --> */}
        <section className="stats py-5 text-bg-secondary d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row g-0 justify-content-center">
              <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                  <FontAwesomeIcon icon={faUsers} size="2xl" />
                  <p className="fs-1">0</p>
                  <h3 className="fs-6 text-uppercase">Clients</h3>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                  <FontAwesomeIcon icon={faDiagramProject} size="2xl" />
                  <p className="fs-1">6</p>
                  <h3 className="fs-6 text-uppercase">Projects</h3>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                  <FontAwesomeIcon icon={faClock} size="2xl" />
                  <p className="fs-1">1</p>
                  <h3 className="fs-6 text-uppercase">Years</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact --> */}
        <section className="contact text-bg-dark bg-gradient py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="text-center mb-5">
                  <h4 className="text-uppercase fw-bold text-primary">
                    Contact
                  </h4>
                  <hr className="w-25 mx-auto" />
                  <h2 className="mb-4">I'd love to hear from you.</h2>
                  <p className="lead">
                    If you have any questions or would like to work together,
                    please contact me with the form below.
                  </p>
                </div>

                {/* <!-- Form --> */}
                <form
                  id="form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  {/* Campo nascosto per Netlify */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="mb-5">
                    <input
                      type="text"
                      className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-5 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Footer --> */}
            <div className="d-flex mt-5">
              <p className="flex-grow-1">
                Copyright &copy; 2023 | Design By StyleShout
              </p>
              <div className="hstack gap-3">
                <a href="https://github.com/Fabrizio994" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>

                <a
                  className="text-decoration-none"
                  href="https://github.com/Fabrizio994"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default App;
