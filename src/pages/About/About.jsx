/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";
// import SkillArr from "../../assets/Arr/";
import SkillCard from "./SkillCard";
import { arr } from "../../assets/Arr";
import Socials from "../../components/Socials";
import Skills from "../../components/Skills";

// const servicesData = [
//   {
//     icon: "/images/icon-design.svg",
//     title: "Web design",
//     description: "The most modern and high-quality design made at a professional level."
//   },
//   {
//     icon: "/images/icon-dev.svg",
//     title: "Web development",
//     description: "High-quality development of sites at the professional level."
//   },
//   {
//     icon: "/images/icon-app.svg",
//     title: "Mobile apps",
//     description: "Professional development of applications for iOS and Android."
//   },
//   {
//     icon: "/images/icon-photo.svg",
//     title: "Photography",
//     description: "I make high-quality photos of any category at a professional level."
//   }
// ];




const servicesData = [

  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Learning Professional development of applications for iOS and Android."
  },

];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          <strong>Aditya Goel</strong>, currently pursuing <strong>B.Tech</strong> in Information Technology at <strong>Maharaja Agrasen Institute of Technology, Delhi</strong>. Proficient in <strong>MERN stack</strong> for full-stack web development and skilled in <strong>Java coding</strong>. With <strong>industry-level experience</strong> gained from a <strong>4-month internship</strong> at a <strong>startup</strong>, I actively contributed to the development of a web application. As a <strong>keen learner</strong> always eager to <strong>acquire new skills</strong> through hands-on projects, I am enthusiastic about exploring and collaborating on innovative opportunities in the field.
        </p>
        <p>
          I take pleasure in crafting websites that prioritize <strong>functionality</strong>, <strong>user-friendliness</strong>, and <strong>visual appeal</strong>. Each project I undertake is imbued with a <strong>personal touch</strong> to ensure it's both <strong>engaging</strong> and <strong>user-friendly</strong>. My objective is to effectively communicate your <strong>message</strong> and <strong>brand identity</strong> in a highly <strong>creative</strong> manner. I have a proven track record of designing websites for numerous <strong>well-known brands</strong>.
        </p>
      </section>





      <Socials />

      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - testimonials
    --> */}

      {/* <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section> */}


      {/* <!--
      - clients
    --> */}

      {/* <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section> */}





      <Skills />

    </article>
  )
}

export default About