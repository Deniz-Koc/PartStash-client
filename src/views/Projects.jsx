import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProjects } from "../services/projectService"

export const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data)
    })
  }, [])

  return (
    <div>
      <div className="page-header">
        <h1>Projects</h1>
        <Link to="/projects/new" className="btn-new">+ New project</Link>
      </div>
      <div className="card-list">
        {projects.map((project) => {
          return (
            <Link key={project.id} to={`/projects/${project.id}`} className="list-card">
              <span className="list-card-title">{project.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}