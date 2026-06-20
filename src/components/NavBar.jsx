import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("partstash_token")
    localStorage.removeItem("partstash_username")
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">PartStash</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/components">Inventory</Link>
        <Link to="/profile">Profile</Link>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}