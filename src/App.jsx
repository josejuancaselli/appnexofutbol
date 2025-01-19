import { BrowserRouter, Route, Routes } from "react-router-dom"
import LigasList from "./components/ligas/LigasList"
import LigasDetail from "./components/ligas/LigasDetail"
import EquiposDetail from "./components/equipos/EquiposDetail"
import JugadoresDetail from "./components/jugadores/JugadoresDetail"
import Crud from "./components/crud/Crud"
import CrudLigas from "./components/crud/CrudLigas"
import CrudEquipo from "./components/crud/CrudEquipo"



function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/crud/:id" element={<CrudLigas />} />
          <Route path="/crud/:id/:crudEquipo" element={<CrudEquipo />} />
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
