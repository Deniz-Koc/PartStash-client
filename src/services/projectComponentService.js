const API_URL = "http://localhost:8000"

export const getProjectComponents = (projectId) => {
  return fetch(`${API_URL}/project-components?project=${projectId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}

export const getProjectComponentsByComponent = (componentId) => {
  return fetch(`${API_URL}/project-components?component=${componentId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  }).then((res) => res.json())
}