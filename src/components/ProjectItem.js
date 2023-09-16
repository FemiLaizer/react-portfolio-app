import React from 'react'

const ProjectItem = ({ id, projectName, details, link, category, type, image }) => {
    return (
        <div className="work_container">
            <div className="work_img">
                <img className='img' src={image} alt={projectName} />
            </div>
                <div className="work-text">
                    <h2 className="work-h2">{projectName}</h2>
                    
                    <p className='work-p'>This project was done to show my skills in {category} level for {type}. 
                    <span>{details}</span>. You can check is out by clicking <a href={link}> Here </a>
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project.
                    </p>
                    <a href={link}>{link}</a>
                </div>
        </div>
    )
}

export default ProjectItem