const API_URL = "http://localhost:8000"

export const getAllCategories = () => {
  return fetch(`${API_URL}/categories`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}