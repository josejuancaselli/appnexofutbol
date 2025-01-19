import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { db } from "../../firebase/configFirebase";
import CrudLigasDetail from "./CrudLigasDetail";


const CrudLigas = () => {
    const [ligas, setLigas] = useState([]); // se almacenan las ligas
    
    const { id } = useParams()



    useEffect(() => {
        const ligasRef = collection(db, "ligas");
        getDocs(ligasRef)
            .then((response) => {
                setLigas(response.docs.map((doc) => (
                    { id: doc.id, ...doc.data() })
                ));
            })

    }, [])


const ligaActual = ligas.find((liga) => liga.id === id)

    return (
        <div>
            {
                ligaActual ? <CrudLigasDetail ligaActual={ligaActual} /> 
                :
                <p>cargando...</p>
            }
            
        </div>
    )
}

export default CrudLigas