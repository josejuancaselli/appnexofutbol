import { BrowserRouter, Route, Routes } from "react-router-dom"
import LigasList from "./ligas/LigasList"
import LigasDetail from "./ligas/LigasDetail"
import EquiposDetail from "./equipos/EquiposDetail"
import JugadoresDetail from "./jugadores/JugadoresDetail"



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
