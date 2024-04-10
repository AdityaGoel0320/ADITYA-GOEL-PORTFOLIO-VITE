import React, { useState } from 'react';
import './Accordion.css'; // Import your CSS file for styling

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2 className='h5'>{title} </h2> 
                <span className='h5'>{isOpen ? <i class="fa-solid fa-arrow-up"></i> : <i class="fa-solid fa-arrow-down"></i>}</span>
            </div>
            <div className="h5 accordion-content">
                <div className={`content ${isOpen ? 'open' : ''}`}>{children}</div>
            </div>
        </div>
    );
}

export default Accordion;
