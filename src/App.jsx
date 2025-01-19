import { BrowserRouter, Route, Routes } from "react-router-dom"
import LigasList from "./components/ligas/LigasList"
import LigasDetail from "./components/ligas/LigasDetail"
import EquiposDetail from "./components/equipos/EquiposDetail"
import JugadoresDetail from "./components/jugadores/JugadoresDetail"



function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LigasList/>} />
          <Route path="/ligas/:nombreLiga" element={<LigasDetail/>} />
          <Route path="/ligas/:nombreLiga/:nombreEquipo" element={<EquiposDetail/>}/>
          <Route path="/ligas/:nombreLiga/:nombreEquipo/:nombreJugador" element={<JugadoresDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
