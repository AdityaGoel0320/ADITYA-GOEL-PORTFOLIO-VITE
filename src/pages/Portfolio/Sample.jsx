import { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import Accordion from '../../components/Accordian';

const Sample = ({ project }) => {

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
        // <div>Sample</div>
        <>

            <li
                className="  m-4  p-4  rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                data-filter-item
                data-category={project.category}
                key={project.id}
            >

                <div className="grid  gap-4 sm:grid-cols-12 p-1    ">

                    <div className=' sm:col-span-5   rounded   flex justify-center items-center p-1'>
                        <a href={project.liveLink} target='_blank'>


                            <img className='' src={project.image} alt={project.title} loading="lazy" />
                        </a>

                    </div>

                    <p className=" text-white   sm:col-span-7 rounded  ">
                        <div className='flex justify-center items-center flex-col gap-4  '>

                            <h3 className="text-3xl font-bold  ">{project.title}</h3>
                            <div className="flex justify-center items-center  text-xl gap-1 ">

                                <a href="https://drive.google.com/file/d/13csFfVIFXCmLTlQ-kjAdgbX2yUEs6vd3/view?usp=sharing" target="_blank">

                                    <h1>github <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
                                </a>
                                <a href={project.liveLink} target='_blank'>

                                    <h1>Live <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
                                </a>
                            </div>
                            {/* <p className="project-category">{project.category}</p> */}
                            <div className=" m-1 p-1 flex justify-center items-center  gap-4 flex-wrap ">
                                <h3 className='text-2xl font-bold '>Tech used :-</h3>
                                {Array.isArray(project.tech) ? (
                                    project.tech.map((tech, index) => (
                                        <span key={index} className="  flex  flex-wrap justify-center items-center  border-2 border-yellow-300  rounded-xl p-1 ">
                                            {tech.trim()}
                                        </span>
                                    ))
                                ) : (

                                    <span className="">
                                        {project.tech}
                                    </span>
                                )}
                            </div>

                            <Accordion className="flex justify-center items-center" title="Some Key points">
                                <p className='text-xl'>
                                    {project.desc}
                                </p>
                            </Accordion>

                        </div>


                    </p>
                </div>
            </li>





        </>
    )
}

export default Sample