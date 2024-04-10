import React from 'react';
import { Resume } from '../assets/FrontEndUtils';

const Socials = () => {


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
        <>
            <header>
                <h2 className="h2 article-title">Connect with me</h2>
            </header>
            <div className="socials">
                {SocialArr.map((x, index) => (
                    <a key={index} href={x.link} target="_blank" rel="noopener noreferrer">
                        {x.Image} {/* Render the icon directly */}
                    </a>
                ))}
                <header>
                    <a href={Resume} target="_blank">

                        <h2 className="h3 Resume-btn ">Resume</h2>
                    </a>
                </header>

            </div>

        </>
    );
};

export default Socials;
