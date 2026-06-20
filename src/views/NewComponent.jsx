import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createComponent } from "../services/componentService"
import { getAllCategories } from "../services/categoryService"

export const NewComponent = () => {
  const [name, setName] = useState("")
  const [partNumber, setPartNumber] = useState("")
  const [description, setDescription] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories().then(setCategories)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newComponent = {
      name,
      part_number: partNumber,
      description,
      category_id: parseInt(categoryId)
    }
    createComponent(newComponent).then(() => {
      navigate("/components")
    })
  }

  return (
    <div>
      <h1>New Component</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  )
}