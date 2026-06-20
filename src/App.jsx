import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Authorized } from "./components/Authorized"
import { Login } from "./views/Login"
import { Dashboard } from "./views/Dashboard"
import { Projects } from "./views/Projects"
import { NewProject } from "./views/NewProject"
import { ProjectDetail } from "./views/ProjectDetail"
import { Inventory } from "./views/Inventory"
import { ComponentDetail } from "./views/ComponentDetail"
import { Profile } from "./views/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Authorized />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/components" element={<Inventory />} />
          <Route path="/components/:componentId" element={<ComponentDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App