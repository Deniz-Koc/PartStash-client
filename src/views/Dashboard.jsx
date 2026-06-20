import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProjects } from "../services/projectService"
import { getAllComponents } from "../services/componentService"
import { getAllCategories } from "../services/categoryService"

export const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const [components, setComponents] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllProjects().then(setProjects)
    getAllComponents().then(setComponents)
    getAllCategories().then(setCategories)
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <div>Projects: {projects.length}</div>
        <div>Components: {components.length}</div>
        <div>Categories: {categories.length}</div>
      </div>

      <h2>Recent projects</h2>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}