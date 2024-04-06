/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

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
          <strong>Aditya Goel</strong>, currently pursuing <strong>B.Tech</strong> in Information Technology at <strong>Maharaja Agrasen Institute of Technology, Delhi</strong>. Specializing in <strong>MERN stack</strong> for full-stack web development and proficient in <strong>Java coding</strong>.Possessing  <strong> industry-level experience </strong> from a <strong>4-month internship</strong> in a <strong> startup </strong>, I contributed to the development of a web application. As a <strong>fervent learner</strong> and advocate for <strong> acquiring new skills </strong> through project work, I am <strong> enthusiastic </strong>about exploring and collaborating on innovative
          opportunities in the field.

        </p>

        <p>I enjoy creating websites with an emphasis on <strong>functionality</strong>, <strong>user-friendliness</strong>, and <strong>visual appeal</strong>. Additionally, I inject a <strong>personal touch</strong> into each project to ensure it's both <strong>engaging</strong> and <strong>user-friendly</strong>. My objective is to convey your <strong>message</strong> and <strong>identity</strong> in a highly <strong>creative</strong> manner. I have a track record of designing websites for numerous <strong>well-known brands</strong>.</p>



      </section>


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

      <section className="clients">

        <h3 className="h3 clients-title">Skills</h3>

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

      </section>

    </article>
  )
}

export default About