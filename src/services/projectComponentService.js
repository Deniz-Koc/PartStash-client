const API_URL = "http://localhost:8000"

export const getProjectComponents = (projectId) => {
  return fetch(`${API_URL}/project-components?project=${projectId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}