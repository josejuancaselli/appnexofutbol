import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { db } from "../../firebase/configFirebase";


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

    const editarEquipo = () => {

    }


    const ligaData = ligas.find((liga) => liga.id === id)




    return (
        <div>
            {
                ligaData ?
                    <div>
                        <h1> {console.log(ligaData.equipo)} {ligaData.nombre_liga}</h1>
                        <ul>
                            {
                                ligaData.equipo.map((equipos) => {
                                    return (
                                        <div key={equipos.nombre}>
                                            <li >{equipos.nombre}</li>
                                            <Link to = {`/crud/${ligaData.id}/${equipos.nombre}`}>editar equipo</Link>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    :
                    <div>cargando... </div>
            }
        </div>
    )
}

export default CrudLigas