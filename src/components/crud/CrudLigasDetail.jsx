import { addDoc, collection, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form"
import { db } from "../../firebase/configFirebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CrudLigasDetail = ({ ligaActual }) => { // me traje por props la liga actual para agregar equipos
    const [equipos, setEquipos] = useState([]);
    const { register, handleSubmit } = useForm();

    const crearEquipo = (info) => { // como argumento va TODA la info que ingrese en el "...register" del form
        const equiposRef = collection(db, "equipos"); // se guarda la collection en esta variable
        const nombre_equipo = info.nombre_equipo // value especifico del "...register", en este caso el nombre del equipo
        const liga = ligaActual.nombre_liga // guardo el valor del nombre de la liga que me traje por props
        addDoc(equiposRef, { nombre_equipo, liga }) //se agrega el documento a la collection con los dos valores. Tiene que ser un objeto por eso las llaves
            .then(() => {
                cargarEquipos() // disparo la funcion de cargar equipos
            })
    }

    const cargarEquipos = () => {
        const equiposRef = collection(db, "equipos");
        getDocs(equiposRef) // se obtiene la collection de equipos que cargue anteriormente con "crearEquipo ()"
            .then((res) => {
                const equiposData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // convierte la respuesta en un array para ser utilizado
                const equiposFiltrados = equiposData.filter((equipo) => equipo.liga === ligaActual.nombre_liga); // filtro los equipos para que solo me muestre los de la liga actual
                setEquipos(equiposFiltrados); // actualizo el estado de equipos con los equipos filtrados
            })
    }

    useEffect(() => {
        cargarEquipos() // cuando el componente se monte, se ejecuta la funcion de cargar equipos
    }, [])

    return (
        <div>
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
                                <div key={ equipo.id}>
                                    <li >{equipo.nombre_equipo}</li>
                                    <Link to = {`/crud/${ligaActual.nombre_liga}/${equipo.nombre_equipo}`}>Editar</Link>
                                    <button>Borrar</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CrudLigasDetail