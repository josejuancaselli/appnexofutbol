import { BrowserRouter, Route, Routes } from "react-router-dom"
import LigasList from "./components/ligas/LigasList"
import LigasDetail from "./components/ligas/LigasDetail"
import EquiposDetail from "./components/equipos/EquiposDetail"
import JugadoresDetail from "./components/jugadores/JugadoresDetail"
import Crud from "./components/crud/Crud"
import CrudLigas from "./components/crud/CrudLigas"
import CrudEquipo from "./components/crud/CrudEquipo"
import CrudInicio from "./components/crud/CrudInicio"
import "./components/crud/crud.css"




function App() {

  

  return (

    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CrudInicio />} />

            <Route path="/:crud" element={<Crud />} />
            <Route path="/:crud/:nombre_liga" element={<CrudLigas />} />
            <Route path="/:crud/:nombre_liga/:crudEquipo" element={<CrudEquipo />} />

            <Route path="/ligas" element={<LigasList />} />
            <Route path="/ligas/:nombreLiga" element={<LigasDetail />} />
            <Route path="/ligas/:nombreLiga/:nombreEquipo" element={<EquiposDetail />} />
            <Route path="/ligas/:nombreLiga/:nombreEquipo/:nombreJugador" element={<JugadoresDetail />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
