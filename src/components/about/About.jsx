import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
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
            <img src={profile_picture} alt="About Adil El Alaoui" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                10+ Years
                <br />
                Fullstack Development
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Master's Degree
                <br/>
                Engineering Complex Systems
                <br/>
                University of Lorraine
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                100+ Successful
                <br />
                Projects Delivered
              </small>
            </article>
          </div>
          <p>
            As a passionate Fullstack Developer with over 10 years of experience, I specialize in building
            scalable web applications using modern technologies. My expertise spans both frontend frameworks
            like React, Vue.js, and Next.js, and backend technologies including PHP/Laravel, Node.js, and
            Python. I thrive on transforming complex business requirements into elegant, high-performance
            solutions that drive real results.
          </p>
          <p>
            Throughout my career, I've successfully delivered enterprise-level applications for diverse
            industries, from e-commerce platforms to data-driven SaaS products. My approach combines strong
            technical skills with a deep understanding of user experience, ensuring that every application
            I build is not only robust and secure but also intuitive and engaging. I'm particularly skilled
            in architecting RESTful APIs, implementing CI/CD pipelines, and optimizing database performance
            for maximum efficiency.
          </p>
          <p>
            With a Master's degree in Engineering Complex Systems from the University of Lorraine, I bring
            both theoretical knowledge and practical expertise to every project. I'm passionate about staying
            current with emerging technologies and best practices, regularly exploring new frameworks and
            methodologies to deliver cutting-edge solutions. Whether working independently or as part of an
            agile team, I'm committed to writing clean, maintainable code and fostering collaborative
            environments that drive innovation.
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
