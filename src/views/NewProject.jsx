import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createProject } from "../services/projectService"

export const NewProject = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    createProject({ name, description }).then(() => {
      navigate("/projects")
    })
  }

  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}