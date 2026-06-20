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
      <div className="page-header">
        <h1>Inventory</h1>
        <Link to="/components/new" className="btn-new">+ New component</Link>
      </div>
      <div className="card-list">
        {components.map((component) => {
          return (
            <Link key={component.id} to={`/components/${component.id}`} className="list-card">
              <span className="list-card-title">{component.name}</span>
              <span className="list-card-meta">{component.category?.label} · {component.part_number}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}