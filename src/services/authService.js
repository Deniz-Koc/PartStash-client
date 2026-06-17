const API_URL = "http://localhost:8000"

export const login = (username, password) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then((res) => res.json())
}

export const register = (username, email, password) => {
  return fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  }).then((res) => res.json())
}