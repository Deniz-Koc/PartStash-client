import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllComponents } from "../services/componentService"

export const Inventory = () => {
  const [components, setComponents] = useState([])

  useEffect(() => {
    getAllComponents().then(setComponents)
  }, [])

  return (
    <div>
      <h1>Inventory</h1>
      <Link to="/components/new">+ New component</Link>
      {components.map((component) => {
        return (
          <div key={component.id}>
            <Link to={`/components/${component.id}`}>{component.name}</Link>
            <span> — {component.category?.label} — {component.part_number}</span>
          </div>
        )
      })}
    </div>
  )
}