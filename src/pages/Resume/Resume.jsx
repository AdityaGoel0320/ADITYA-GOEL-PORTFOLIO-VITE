import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
import { HacktoberFestDesc, desc, descOfDigitalShiftInterShip, mlDesc } from '../../assets/FrontEndUtils';
import Skills from '../../components/Skills';
import Socials from '../../components/Socials';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>




      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Internship Experience</h3>
        </div>

        <ol className="timeline-list">


          <TimelineItem
            title="Full Stack Web Developer at Digital Shift Pvt Ltd"
            date="June 2024 - Sep 2024"
            description={descOfDigitalShiftInterShip}
          />

          <br />
          <TimelineItem
            title="Data Science Intern at Acmegrade"
            date="May 2024 - June 2024"
            description={mlDesc}
          />
          <br />

          <TimelineItem
            title="Software and R & D at GEMS OF JCI"
            date="Sep 2023 - Dec 2023"
            description={desc}
          />

          <br />

          <TimelineItem
            title="Completed Hacktoberfest 2022"
            date="Oct 2022 - Nov 2022"
            description={HacktoberFestDesc}
          />
          <br />

          {/* <TimelineItem
            title="Comming Soon ...."
            date="    "
            description="        "
          /> */}

        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Maharaja Agrasen Institute Of Technology"
            date="2021 - Present"
            description="Bachelor of Technology (BTech), Information Technology"
          />
          <TimelineItem
            title="Maharaja Aggarsain Adarsh Public School"
            date="2009 — 2021"
            description="Schooling PCM (12 AND 10), CBSE"
          />

        </ol>
      </div>



      {/* <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul>
      </div> */}



      <Skills />
      <Socials />
    </section>
  );
};

export default Resume;
