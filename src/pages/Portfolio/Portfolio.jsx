import { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import Accordion from '../../components/Accordian';

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Filter buttons */}
      {/* <ul className="filter-list">
        {['All', 'Front-End', 'Back-End', 'Mern-Stack'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul> */}

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
             <div className="projectBox">
             <a target="_blank" href={project.liveLink}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <FaRegEye /> */}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>

                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
              </a>
              <h3 className="project-title">{project.title}</h3>
              <div className="projectLinks">

                <a href="https://drive.google.com/file/d/13csFfVIFXCmLTlQ-kjAdgbX2yUEs6vd3/view?usp=sharing" target="_blank">

                  <h1>github <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
                </a>
                <a href={project.liveLink} target='_blank'>

                  <h1>Live <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
                </a>
              </div>
              {/* <p className="project-category">{project.category}</p> */}
              <div className="project-category">
                {Array.isArray(project.tech) ? (
                  project.tech.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech.trim()}
                    </span>
                  ))
                ) : (

                  <span className="tech-item">
                    {project.tech}
                  </span>
                )}
              </div>

              <Accordion title="Some Key points">
                {project.desc}
              </Accordion>
             </div>

            </li>
          ))}
        </ul>
      </section>

    </section>
  );
};

export default Portfolio;
