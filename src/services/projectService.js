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

export const createProject = (project) => {
  return fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  }).then((res) => res.json())
}

export const updateProject = (id, project) => {
  return fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  }).then((res) => res.json())
}

export const deleteProject = (id) => {
  return fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Token ${localStorage.getItem("partstash_token")}`
    }
  })
}