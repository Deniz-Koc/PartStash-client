const API_URL = "http://localhost:8000"

export const getAllProjects = () => {
  return fetch(`${API_URL}/projects`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}

export const getProjectById = (id) => {
  return fetch(`${API_URL}/projects/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}