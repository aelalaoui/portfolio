import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/brights-lite.png";
import IMG2 from "../../assets/brochure.png";
import IMG3 from "../../assets/Autogeneartive-blog.png";
import IMG4 from "../../assets/calculator.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "VueJs 3 | Tailwind | MapBox Weather App",
    github: "https://github.com/aelalaoui/app-weather",
    demo: "https://app-weather-forcasting.netlify.app/weather/Meurthe-et-Moselle/Nancy?lat=48.693722&lng=6.18341&preview=true",
    brief:
      "https://github.com/aelalaoui/app-weather/blob/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Brochure Site",
    github: "https://github.com/aelalaoui/restaurant-brochure-site",
    demo: "https://restaurant-brochure-site.netlify.app/",
    brief: "https://github.com/aelalaoui/restaurant-brochure-site/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Python | Azur Serveless | MS Automation | Blogger Api | OpenAI Api",
    github: "https://github.com/aelalaoui/Autogeneative-blog",
    demo: "https://www.powerofnutritions.com//",
    brief:
      "https://github.com/aelalaoui/Autogeneative-blog/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/aelalaoui/app-calculator",
    demo: "https://app-conventional-calculator.netlify.app/",
    brief:
      "https://github.com/aelalaoui/app-calculator/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
