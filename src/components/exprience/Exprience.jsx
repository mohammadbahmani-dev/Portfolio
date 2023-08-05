import React from "react";
import "./exprience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I have</h5>
      <h2>My Exprience</h2>

      <div className="container exprience__container">
        <div className="exprience__frontend">
          <h3>Frontend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-align">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-align">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-align">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-align">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exprience__backend">
          <h3>Backend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                {" "}
                <h4>Express JS</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-align">Inermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                {" "}
                <h4>MySQL</h4>
                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                {" "}
                <h4>PHP</h4>
                <small className="text-align">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
