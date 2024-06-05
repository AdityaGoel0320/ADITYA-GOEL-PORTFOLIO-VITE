import { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import Accordion from '../../components/Accordian';
import Sample from './Sample';

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
  
  const handleFilterClick = (techName) => {
  setSelectedCategory(techName);
  if (techName === 'All') {
    setFilteredProjects(projects);
  } else {
    const filtered = projects.filter(project => project.tech.includes(techName));
    setFilteredProjects(filtered);
  }
};

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 font-bold uppercase article-title">Projects</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {['All', 'MERN', 'Reactjs', 'Nodejs'  , 'FireBase' , 'TailwindCSS' , 'Chakra-UI' ,  'HTML' , 'CSS'  ].map(category => (
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
      </ul>

      {/* Portfolio items */}
      
      <section className=" ">
        <ul className=" flex justify-center items-center flex-col  gap-8 ">
          {filteredProjects.map(project => (
            <>
            <Sample project = {project}/>
            </>

          ))}
        </ul>
      </section>

    </section>
  );
};

export default Portfolio;
