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
      <h1>Projects</h1>
      <Link to="/projects/new">+ New project</Link>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </div>
        )
      })}
    </div>
  )
}