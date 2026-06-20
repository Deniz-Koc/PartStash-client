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
    <div>
      <h1>Profile</h1>
      <p>Logged in as: {username}</p>

      <div>
        <div>Projects: {projects.length}</div>
        <div>Components: {components.length}</div>
        <div>Categories: {categories.length}</div>
      </div>

      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}