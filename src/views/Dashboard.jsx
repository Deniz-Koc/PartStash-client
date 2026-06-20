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
      <section className="hero">
        <div className="hero-text">
          <h1>Dashboard</h1>
          <div className="stat-cards">
            <div className="stat-card">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{components.length}</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>
        <img src="/dashboard-art.png" alt="" className="hero-art" />
      </section>

      <section className="recent">
        <div className="recent-text">
          <h2>Recent projects</h2>
          <div className="project-cards">
            {projects.map((project) => {
              return (
                <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                  {project.name}
                </Link>
              )
            })}
          </div>
        </div>
        <img src="/projects-art.png" alt="" className="recent-art" />
      </section>
    </div>
  )
}