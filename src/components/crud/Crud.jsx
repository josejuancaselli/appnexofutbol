import { useForm } from "react-hook-form";
import { db } from "../../firebase/configFirebase"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Crud = () => {
    const { register, handleSubmit } = useForm();
    const [ligas, setLigas] = useState([]); // se almacenan las ligas

    const crearLiga = (info) => {
        const nombre_liga = info
        const ligasRef = collection(db, "ligas");

        
        addDoc(ligasRef, nombre_liga)
            .then(() => {
                cargarLigas()
            })
    }

    const cargarLigas = () => {
        const ligaRef = collection(db, "ligas");
        getDocs(ligaRef)
            .then((res) => {
                setLigas(
                    res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            })
    }

    useEffect(() => {
        cargarLigas()
    }, [])

    return (

        <div>
            <form onSubmit={handleSubmit(crearLiga)}>
                <label> Nombre de la liga:</label>
                <input type="text" {...register("nombre_liga")} />
                <button type="submit">Crear</button>
            </form>

            <div>
                <h2>Lista de ligas</h2>
                <ul>
                    {ligas.map((liga) => (
                        <li key={liga.id}>
                            <p>Liga {liga.nombre_liga}</p>
                            <Link to={`/crud/${liga.id}`}>Agregar equipos</Link>
                            <button>borrar liga</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>





        // <div>
        //     <form onSubmit={handleSubmit(crearLiga)}>
        //         <label> Nombre de la liga:</label>
        //         <input type="text" {...register("ligaNombre")} />

        //         <label> Nombre de equipo:</label>
        //         <input type="text" {...register("nombreEquipo")} />
        //         <button type="button" onClick={agregarEquipo}>agregar</button>

        //         <button type="submit" >Crear</button>
        //     </form>

        //     <div>
        //         {
        //             ligas.map((liga) => {
        //                 return (
        //                     <div key={ liga.id}>
        //                         <h2 key={liga.nombre_liga}> Liga {liga.nombre_liga}</h2>

        //                             {
        //                                 liga.equipo.map((p) =>{
        //                                     return <li key={p.nombre}> {p.nombre} </li>
        //                                 })
        //                             }
        //                         <Link to = {`/crud/${liga.id}`}>Editar equipos de la liga</Link>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>

        // </div>

    )
}

export default Crud
