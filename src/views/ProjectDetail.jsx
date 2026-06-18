import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getProjectById } from "../services/projectService"
import { getProjectComponents } from "../services/projectComponentService"

export const ProjectDetail = () => {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [projectComponents, setProjectComponents] = useState([])

  useEffect(() => {
    getProjectById(projectId).then(setProject)
    getProjectComponents(projectId).then(setProjectComponents)
  }, [projectId])

  if (!project) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Link to="/projects">← Back to projects</Link>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Created on: {project.created_on}</p>

      <h2>Components in this project</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Category</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {projectComponents.map((pc) => {
            return (
              <tr key={pc.id}>
                <td>{pc.component.name}</td>
                <td>{pc.component.category?.label}</td>
                <td>{pc.quantity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}