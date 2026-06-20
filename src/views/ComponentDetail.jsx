import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getComponentById } from "../services/componentService"
import { getProjectComponentsByComponent } from "../services/projectComponentService"

export const ComponentDetail = () => {
  const { componentId } = useParams()
  const [component, setComponent] = useState(null)
  const [usages, setUsages] = useState([])

  useEffect(() => {
    getComponentById(componentId).then(setComponent)
    getProjectComponentsByComponent(componentId).then(setUsages)
  }, [componentId])

  if (!component) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Link to="/components">← Back to inventory</Link>
      <h1>{component.name}</h1>
      <p>{component.category?.label} — {component.part_number}</p>
      <p>{component.description}</p>

      <h2>Used in these projects</h2>
      {usages.length === 0 ? (
        <p>Not used in any project yet.</p>
      ) : (
        <ul>
          {usages.map((pc) => {
            return (
              <li key={pc.id}>
                <Link to={`/projects/${pc.project.id}`}>{pc.project.name}</Link> — Qty {pc.quantity}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}