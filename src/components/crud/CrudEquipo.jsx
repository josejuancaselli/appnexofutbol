//este componente es donde se ve el detalle del equipo y te permite agregar jugadores

import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/configFirebase";
import CrudEquipoDetail from "./CrudEquipoDetail";

const CrudEquipo = () => {
    const { register, handleSubmit } = useForm();
    const [jugadores, setJugadores] = useState([])
    const { crudEquipo } = useParams()

    const crearJugador = (info)=>{ // funcion para crear jugador con la info del form
        const jugadoresRef = collection( db, "jugadores") // traigo la collection y la guardo en la variable
        const jugador = {...info, equipo: crudEquipo } // creo una variable con un objeto con la info del jugador + el equipo en el que juega (el equipo lo saco del useParams())
        addDoc(jugadoresRef, jugador)// paso la variable "jugador" porque es un objeto con la info del form + el equipo en el que juega
        .then (()=>{
            mostrarJugadores() //uso la funcion para mostrar los jugadores que estan en la collection ni bien agregue uno nuevo
        })
    }

    const mostrarJugadores = () =>{
        const jugadoresRef = (collection(db, "jugadores"))
        getDocs(jugadoresRef)
        .then ((res) =>{
            const jugadoresData= res.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            const jugadoresFiltrados = jugadoresData.filter ((item) => item.equipo === crudEquipo)
            setJugadores(jugadoresFiltrados)
        })
    }

    useEffect(()=>{
        mostrarJugadores()
    },[])

    return (
        <div>
            
            <h1>{crudEquipo}</h1>
            <form onSubmit={handleSubmit(crearJugador)}>

                <label>Nombre jugador:</label>
                <input type="text" {...register("nombre_jugador")} />

                <label>Edad:</label>
                <input type="number" {...register("edad")} />

                <label>Posicion</label>
                <input type="text" {...register("posicion")} />

                <button type="submit">Agregar</button>

            </form>


            <div>
                <CrudEquipoDetail jugadores={jugadores} />
            </div>
            


        </div>
    )
}

export default CrudEquipo