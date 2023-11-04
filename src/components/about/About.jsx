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
            <img src={profile_picture} alt="About Ademir" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                Several Years of
                <br />
                Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Master Degree
                <br/>
                in Engineering Complexes Systems
                <br/>
                from Lorraine Univerity
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                Numerous Successfully
                <br />
                Completed and Counting
              </small>
            </article>
          </div>
          <p>
            Passionate about web development, I am a backend developer specializing in PHP (Laravel)
            and frontend with a particular expertise in Vue.js. With a strong background, I have 
            contributed to the creation of robust and scalable systems for various companies. 
            My results-oriented approach and my passion for optimization enable me to create 
            high-performance and user-friendly applications.
          </p>
          <p>
            My proficiency in PHP, particularly within the Laravel framework, has allowed me to build 
            powerful backend systems that form the backbone of many successful projects. Additionally, 
            my expertise in Vue.js on the frontend side has been instrumental in crafting seamless 
            and interactive user interfaces. This combination of skills enables me to develop end-to-end 
            solutions that not only meet the functional requirements but also provide an exceptional 
            user experience.
          </p>
          <p>
            Having worked on a diverse range of projects, I understand the importance of adaptability and 
            scalability in web development. I approach each project with a focus on creating robust, 
            future-proof solutions that can evolve alongside the needs of the business. This, coupled with 
            my keen eye for detail and commitment to delivering results, has consistently led to the 
            development of applications that exceed client expectations.
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
