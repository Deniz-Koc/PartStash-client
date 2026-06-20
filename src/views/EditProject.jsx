import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProjectById, updateProject } from "../services/projectService"

export const EditProject = () => {
  const { projectId } = useParams()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getProjectById(projectId).then((project) => {
      setName(project.name)
      setDescription(project.description)
    })
  }, [projectId])

  const handleSubmit = (event) => {
    event.preventDefault()
    updateProject(projectId, { name, description }).then(() => {
      navigate(`/projects/${projectId}`)
    })
  }

  return (
    <div>
      <h1>Edit Project</h1>
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
        <button type="submit">Save</button>
      </form>
    </div>
  )
}