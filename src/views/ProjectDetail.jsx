import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getProjectById, deleteProject } from "../services/projectService"
import { getAllComponents } from "../services/componentService"
import {
  getProjectComponents,
  createProjectComponent,
  deleteProjectComponent
} from "../services/projectComponentService"

export const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [projectComponents, setProjectComponents] = useState([])
  const [components, setComponents] = useState([])
  const [selectedComponentId, setSelectedComponentId] = useState("")
  const [quantity, setQuantity] = useState(1)

  const loadProjectComponents = () => {
    getProjectComponents(projectId).then(setProjectComponents)
  }

  useEffect(() => {
    getProjectById(projectId).then(setProject)
    getAllComponents().then(setComponents)
    loadProjectComponents()
  }, [projectId])

  const handleAddComponent = (event) => {
    event.preventDefault()
    const newLink = {
      project_id: parseInt(projectId),
      component_id: parseInt(selectedComponentId),
      quantity: parseInt(quantity)
    }
    createProjectComponent(newLink).then(() => {
      setSelectedComponentId("")
      setQuantity(1)
      loadProjectComponents()
    })
  }

  const handleRemove = (pcId) => {
    deleteProjectComponent(pcId).then(() => {
      loadProjectComponents()
    })
  }

  const handleDeleteProject = () => {
    deleteProject(projectId).then(() => {
      navigate("/projects")
    })
  }

  if (!project) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Link to="/projects">← Back to projects</Link>
      <h1>{project.name}</h1>
      <Link to={`/projects/${projectId}/edit`}>Edit</Link>
      <button type="button" onClick={handleDeleteProject}>Delete project</button>
      <p>{project.description}</p>
      <p>Created on: {project.created_on}</p>

      <h2>Components in this project</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Category</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projectComponents.map((pc) => {
            return (
              <tr key={pc.id}>
                <td>{pc.component.name}</td>
                <td>{pc.component.category?.label}</td>
                <td>{pc.quantity}</td>
                <td>
                  <button type="button" onClick={() => handleRemove(pc.id)}>×</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h3>Add a component</h3>
      <form onSubmit={handleAddComponent}>
        <select
          value={selectedComponentId}
          onChange={(event) => setSelectedComponentId(event.target.value)}
        >
          <option value="">Select a component</option>
          {components.map((component) => {
            return (
              <option key={component.id} value={component.id}>
                {component.name}
              </option>
            )
          })}
        </select>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}