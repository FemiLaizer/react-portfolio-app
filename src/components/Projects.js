import React from 'react';
import ProjectItem from "./ProjectItem";

const Projects = ({ projectList, projects, filterCategory }) => {

    return (
        <section className="section" id="work">
            <h2 className="section-title">Projects</h2>
            <div className='work_list'>{
                projectList.map((category, index) => (
                    <button onClick={() => filterCategory((category))}
                        className='work_category' key={index}>{category}
                    </button>
                ))
            }</div>
            <div className='bd-grid'>
                {projects.map(project => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </section>

    )
}

export default Projects;