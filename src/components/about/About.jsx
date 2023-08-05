import React from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Exprience</h5>
              <small>+3 Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Students</h5>
              <small>+200 worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>+8 Completed</small>
            </article>
          </div>
          <p>
            I have a passion for creating innovative and efficient web
            applications that deliver exceptional user experiences. My expertise
            in MongoDB, Express.js, React.js, and Node.js allows me to build
            full-stack applications that are scalable, robust, and secure.
            <br />
            Whether you need a custom web application or want to improve an
            existing one, I am here to help. Let's work together to create a
            solution that meets your business goals and exceeds your
            expectations.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
