import React from 'react'
import { arr } from '../assets/Arr'
import SkillCard from '../pages/About/SkillCard'
const Skills = () => {
    return (
        <>
            <section className="clients">

                <h3 className="h2 clients-title">Skills</h3>

                <br />
                <h3 className="h4 ">Front-End</h3>
                <br />
                <div className="skillsArrange">

                    {arr
                        .filter((x) => x.type === "Frontend")
                        .map((x, index) => (
                            <SkillCard key={index} className="" name={x.name} img={x.img} />
                        ))}
                </div>


                <br />
                <br />

                <h3 className="h4 ">Back-End</h3>
                <br />
                <div className="skillsArrange">


                    {arr
                        .filter((x) => x.type === "Backend")
                        .map((x, index) => (
                            <SkillCard key={index} className="" name={x.name} img={x.img} />
                        ))}
                </div>


                <br />
                <br />

                <h3 className="h4 ">Languages</h3>
                <br />
                <div className="skillsArrange">


                    {arr
                        .filter((x) => x.type === "Languages")
                        .map((x, index) => (
                            <SkillCard key={index} className="" name={x.name} img={x.img} />
                        ))}

                </div>


                <br />
                <br />

                <h3 className="h4 ">Other</h3>
                <br />
                <div className="skillsArrange">


                    {arr
                        .filter((x) => x.type === "Other")
                        .map((x, index) => (
                            <SkillCard key={index} className="" name={x.name} img={x.img} />
                        ))}

                </div>



                {/* <ul className="clients-list ">



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

</ul> */}

            </section>
        </>
    )
}

export default Skills