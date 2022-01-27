import React from 'react'
import Project from './Project/Project'
import data from '../../public/data/projects.json'
import style from '../../styles/Home.module.scss'

const Projects = () => {
  return (
    <div className={style.projects}>
      <h2>What I've Been Working On</h2>
      <div className={style.projectsGrid}>
        {data.projects.map(project => (
          <Project key={project.title} image={project.image} title={project.title} body={project.body} url={project.url} />
        ))}
      </div>
    </div>
  )
}

export default Projects
