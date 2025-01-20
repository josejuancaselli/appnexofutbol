import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase/configFirebase";
import CrudLigasDetail from "./CrudLigasDetail";



const CrudLigas = () => {
    
    const [ligas, setLigas] = useState([]); // se almacenan las ligas    
    const { nombre_liga } = useParams() //guardo en una varible el nombre de la liga

    useEffect(() => {
        const ligasRef = collection(db, "ligas"); // cargo la variable con la collection
        getDocs(ligasRef) 
            .then((response) => {
                const ligaData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // convierto en array la collection
                setLigas(ligaData); // cargo el array en la varibale "ligas"
            })
    }, [])

    const ligaActual = ligas.find((liga) => liga.nombre_liga === nombre_liga) // busco la liga actual usando el nombre de useParams() en el array de ligas. Lo cargo en la varibale. 

    return (
        <>
            {
                ligaActual ? <CrudLigasDetail ligaActual={ligaActual} /> : <p>cargando...</p> // si existe la liga actual, cargo el componente CrudLigasDetail
            }
        </>
    )
}

export default CrudLigas