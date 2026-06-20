const API_URL = "http://localhost:8000"

export const getAllComponents = () => {
  return fetch(`${API_URL}/components`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}