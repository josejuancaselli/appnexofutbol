//este componente muestra la pagina donde se edita la liga y se agregan equipos. Es el "/crud/nombre_liga"

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase/configFirebase";
import CrudLigasDetail from "./CrudLigasDetail";
import useLigas from "../../hooks/useLigas"


const CrudLigas = () => {

    // const [ligas, setLigas] = useState([]); // se almacenan las ligas    
    const {mostrarLigas, ligas} = useLigas()
    const { nombre_liga } = useParams() //guardo en una varible el nombre de la liga
    

    useEffect(() => {
        mostrarLigas()
    }, [])

    const ligaActual = nombre_liga

    return (
        <>
            {
                ligaActual ? <CrudLigasDetail ligaActual={ligaActual} /> : <p>cargando...</p> // si existe la liga actual, cargo el componente CrudLigasDetail
            }
        </>
    )
}

export default CrudLigas