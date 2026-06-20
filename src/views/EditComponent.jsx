import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getComponentById, updateComponent } from "../services/componentService"
import { getAllCategories } from "../services/categoryService"

export const EditComponent = () => {
  const { componentId } = useParams()
  const [name, setName] = useState("")
  const [partNumber, setPartNumber] = useState("")
  const [description, setDescription] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories().then(setCategories)
    getComponentById(componentId).then((component) => {
      setName(component.name)
      setPartNumber(component.part_number)
      setDescription(component.description)
      setCategoryId(component.category ? component.category.id : "")
    })
  }, [componentId])

  const handleSubmit = (event) => {
    event.preventDefault()
    const updated = {
      name,
      part_number: partNumber,
      description,
      category_id: parseInt(categoryId)
    }
    updateComponent(componentId, updated).then(() => {
      navigate(`/components/${componentId}`)
    })
  }

  return (
    <div>
      <h1>Edit Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Component name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Part number"
          value={partNumber}
          onChange={(event) => setPartNumber(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            )
          })}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}