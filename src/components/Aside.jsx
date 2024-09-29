import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { Address, Birthday, Phone, Resume, email } from "../assets/FrontEndUtils";

const Aside = () => {

  const github = "https://github.com/AdityaGoel0320"
  const linkedin = "https://www.linkedin.com/in/aditya-goel-286245239"
  const leetcode = "https://leetcode.com/Aditya_Goel_0320/"
  const twitter = "https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09"


  let SocialArr = [
    {
      name: "LinkedIn",
      Image: <i className="fab fa-linkedin"></i>, // Use className instead of class for React
      link: linkedin,
    },
    {
      name: "Twitter",
      Image: <i className="fab fa-twitter"></i>, // Assuming you have Font Awesome classes for Twitter and other icons
      link: twitter,
    },
    // {
    //     name: "LeetCode",
    //     Image: "", // You can add an icon here if needed
    //     link: leetcode,
    // },
    {
      name: "GitHub",
      Image: <i className="fab fa-github"></i>,
      link: github
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        {/* <figure className="avatar-box">
          <img
            src={"/images/profile.png"}
            alt="Aditya Goel"
            width="80"
          />
        </figure> */}

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Aditya Goel
          </h1>

          <p className="title">
            <div className=" text-xl flex items-center gap-4   ">
              {SocialArr.map((x, index) => (
                <a key={index} href={x.link} target="_blank" className=" hover:text-white hover:bg-black  hover:text-xl   " rel="noopener noreferrer">
                  {x.Image} {/* Render the icon directly */}
                </a>
              ))}
              <a href={Resume} target="_blank">

                <h2 className="text-xs p-1  border-2 border-yellow-500 rounded-md hover:text-white hover:bg-black   ">Resume</h2>
              </a>

            </div>
          </p>
        </div>


      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />

            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                {email}
              </a>
            </div>
          </li>







          {/* <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />

            </div>

            <div className="contact-info">
              <p className="contact-title">Resume</p>

              <a href={Resume} target="_blank" className="contact-link">
                Resume <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </li> */}


          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+919773773473" className="contact-link">
                {Phone}
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">{Birthday}</time>
              </div>
            </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{Address}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside