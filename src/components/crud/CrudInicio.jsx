// este componente muestra el inicio del CRUD, donde se agrega o se edita las ligas

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { db } from "../../firebase/configFirebase";
import CrudDetail from "./CrudDetail";
import useLigas from "../../hooks/useLigas"

const CrudInicio = () => {

    const [mostrar, setMostrar] = useState(false);
    const {mostrarLigas, ligas} = useLigas()
    const mostrarDiv = () => {
        setMostrar(!mostrar)
    }

    const ocultarDiv = () => {
        setMostrar(false)
    }

    useEffect(() => {
        mostrarLigas() //viene del hook useLigas
    }, [])

    return (
        <div>
            <Link to={`/crud`}>agregar ligas</Link>
            <button onClick={mostrar ? null : mostrarDiv}>Editar ligas</button>
            {mostrar &&
                <div>
                    <CrudDetail ligas={ligas} />
                    <button onClick={mostrar ? ocultarDiv: null}>Ocultar</button>
                </div>}

        </div>
    )
}

export default CrudInicio