import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, register } from "../services/authService"

export const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    login(username, password).then((data) => {
      if (data.token) {
        localStorage.setItem("partstash_token", data.token)
        localStorage.setItem("partstash_username", username)
        navigate("/")
      } else {
        window.alert("Invalid credentials")
      }
    })
  }

  const handleRegister = (event) => {
    event.preventDefault()
    register(username, email, password).then((data) => {
      if (data.token) {
        localStorage.setItem("partstash_token", data.token)
        localStorage.setItem("partstash_username", username)
        navigate("/")
      } else {
        window.alert("Registration failed")
      }
    })
  }

  return (
    <div>
      <h1>PartStash</h1>
      <p>Find any part like a detective.</p>

      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        {isRegistering && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">{isRegistering ? "Register" : "Log In"}</button>
      </form>

      <p>
        {isRegistering ? "Already have an account? " : "Don't have an account? "}
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Log In" : "Register"}
        </button>
      </p>
    </div>
  )
}