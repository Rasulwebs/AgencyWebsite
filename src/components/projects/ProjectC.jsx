import React from 'react';
import { NavLink } from 'react-router-dom';
const ProjectC = ({ data: { title, img, category } }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-2  col-wrapper" style={{ backgroundImage: `url(${img})` }}>
                <p className='card-txt'>{category}</p>
                <div className="col__child">
                    <NavLink to='/'><i className="bi bi-arrow-up-right"></i></NavLink>
                    <p>{title}</p>
                </div>
            </div>
        </>
    );
};

export default ProjectC;