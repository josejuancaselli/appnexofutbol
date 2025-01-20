

const CrudEquipoDetail = ({ jugadores }) => {





    return (
        <div>
            <div>
                <h1>jugadores</h1>
            {
                jugadores.map((jugador) => {
                    return (
                        <div key={jugador.id}>
                            <h2>{jugador.nombre_jugador}</h2>
                            <p>{jugador.edad}</p>
                            <p>{jugador.posicion}</p>
                            <p>{jugador.equipo}</p>
                            <label>goles</label>
                            <input type="number" />
                            <label >asistencias</label>
                            <input type="number" />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CrudEquipoDetail