import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Inicio from "./pages/Inicio";
import Logout from "../src/pages/auth/logout";
import PrivateRoutes from "../src/utils/PrivateRoutes";
import Mascotas from "./pages/mascotas";
import EstadoDeLaMascota from "./pages/estadoMascota";
import { Toaster } from 'react-hot-toast'
import AccessDenied from "./components/organismos/admin/AccessDenied";
import Usuarios from "./pages/Usuarios";

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<AccessDenied />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/estado-de-la-mascota/:id" element={<EstadoDeLaMascota />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
