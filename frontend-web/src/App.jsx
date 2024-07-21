import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Inicio from "./pages/Inicio";
/* import Usuarios from "./pages/Usuarios"; */
import Logout from "../src/pages/auth/logout";
import PrivateRoutes from "../src/utils/PrivateRoutes";
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/inicio" element={<Inicio />} />
          {/* <Route path="/usuarios" element={<Usuarios />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
