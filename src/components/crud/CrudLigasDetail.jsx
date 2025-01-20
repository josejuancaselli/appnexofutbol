//este componente renderiza los equipos de la liga actual que estoy editando. Me permite agregar o quitar equipos, como tambien sumarle los puntos. Es el "/crud/nombre_liga"


import { addDoc, collection, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form"
import { db } from "../../firebase/configFirebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEquipos from "../../hooks/useEquipos"

const CrudLigasDetail = ({ ligaActual }) => { // me traje por props la liga actual para agregar equipos
    // const [equipos, setEquipos] = useState([]);
    const {equipos, mostrarEquipos, crearEquipos} = useEquipos()
    const { register, handleSubmit } = useForm();
    const ppp = ligaActual.nombre_liga
    

    const crearEquipo = (info) => { // como argumento va TODA la info que ingrese en el "...register" del form
        crearEquipos(info, ppp);
        mostrarEquipos(ppp)
    }
    
    useEffect(() => {
        mostrarEquipos(ppp) // cuando el componente se monte, se ejecuta la funcion de cargar equipos
    }, [])

    return (
        <>
            <h1>{ligaActual.nombre_liga}</h1>
            <form onSubmit={handleSubmit(crearEquipo)}>
                <label > nombre del equipo:</label>
                <input type="text" {...register("nombre_equipo")} />
                <button type="submit">agregar</button>
            </form>

            <div>
                <h2>Equipos</h2>
                <ul>
                    {
                        equipos.map((equipo) => {
                            return (
                                <li key={equipo.id}>
                                    <p >{equipo.nombre_equipo}</p>
                                    <Link to={`/crud/${ligaActual.nombre_liga}/${equipo.nombre_equipo}`}> Editar </Link> {/* link que me lleva al componente CrudEquipo*/}
                                    <button>Borrar</button>
                                    <label >puntos:</label>
                                    <input type="number" />

                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    
                </div>
            </div>
        </>
    )
}

export default CrudLigasDetail