// este componente se utiliza para cargar las ligas, es el "/crud"

import { useForm } from "react-hook-form";
import { db } from "../../firebase/configFirebase"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CrudDetail from "./CrudDetail";
import useLigas from "../../hooks/useLigas"


const Crud = () => {
    const { register, handleSubmit } = useForm();
    const { ligas, mostrarLigas, agregarLigas } = useLigas() // este es el hook para agregar y mostrar las ligas

    const formSubmit = (nombre_liga) => {
        agregarLigas(nombre_liga) // viene del hook useLigas
        mostrarLigas() // viene del hook useLigas
    }

    useEffect(() => {
        mostrarLigas() // viene del hook useLigas
    }, [])

    return (

        <>
            <form onSubmit={handleSubmit(formSubmit)}>
                <label> Nombre de la liga:</label>
                <input type="text" {...register("nombre_liga")} />
                <button type="submit">Crear</button>
            </form>

            <div>
                <h2>Lista de ligas</h2>
                <CrudDetail ligas={ligas} />
            </div>
        </>
    )
}

export default Crud
