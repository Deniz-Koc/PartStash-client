import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllProjects } from "../services/projectService"
import { getAllComponents } from "../services/componentService"
import { getAllCategories } from "../services/categoryService"

export const Profile = () => {
  const [projects, setProjects] = useState([])
  const [components, setComponents] = useState([])
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const username = localStorage.getItem("partstash_username")

  useEffect(() => {
    getAllProjects().then(setProjects)
    getAllComponents().then(setComponents)
    getAllCategories().then(setCategories)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("partstash_token")
    localStorage.removeItem("partstash_username")
    navigate("/login")
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-avatar">{username ? username[0].toUpperCase() : "?"}</div>
        <h1>{username}</h1>

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

        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}