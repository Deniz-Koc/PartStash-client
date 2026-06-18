import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const Authorized = () => {
  const token = localStorage.getItem("partstash_token")

  if (token) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    )
  }

  return <Navigate to="/login" replace />
}