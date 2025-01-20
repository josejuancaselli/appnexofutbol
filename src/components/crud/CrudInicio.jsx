import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { db } from "../../firebase/configFirebase";
import CrudDetail from "./CrudDetail";


const CrudInicio = () => {

    const [mostrar, setMostrar] = useState(false);
    const [ligas, setLigas] = useState([]);

    const mostrarDiv = () => {
        setMostrar(!mostrar)
    }

    const ocultarDiv = () => {
        setMostrar(false)
    }

    useEffect(() => {
        const dataRef = collection(db, "ligas")
        getDocs(dataRef)
            .then((res) => {
                const dataLiga = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setLigas(dataLiga)
            })
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