import { useForm } from "react-hook-form";
import { db } from "../../firebase/configFirebase"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CrudDetail from "./CrudDetail";



const Crud = () => {
    const { register, handleSubmit } = useForm();
    const [ligas, setLigas] = useState([]);



    const agregarLiga = (info) => { // funcion para agregar datos a firebase. Uso la info del form
        const nombre_liga = info // nombre de la liga que viene de lo que se escribe en el form
        const ligasRef = collection(db, "ligas"); // cargo al collection en la variable
        addDoc(ligasRef, nombre_liga) // creo el documento con addDoc, le agrego el nombre de la liga que viene "nombre_liga"
            .then(() => {
                mostrarLigas() // uso la funcion de "mostrarligas()" para que renderice en el momento que agrego una liga
            })
    }

    const mostrarLigas = () => { // funcion para mostrar las ligas en pantalla
        const ligaRef = collection(db, "ligas"); // cargo la collection en esa variable
        getDocs(ligaRef) // traigo la collection
            .then((res) => {
                const ligasData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // convierto en data la collection y la guardo en una variable
                setLigas(ligasData) // seteo "ligas" con la collection
            })
    }

    useEffect(() => {
        mostrarLigas() // uso la funcion para mostrar las ligas de la collection en el momento que se cargue la pagina
    }, [])

    return (

        <>
            <form onSubmit={handleSubmit(agregarLiga)}>
                <label> Nombre de la liga:</label>
                <input type="text" {...register("nombre_liga")} />
                <button type="submit">Crear</button>
            </form>

            <div>
                <h2>Lista de ligas</h2>
                <CrudDetail ligas={ligas} />
            </div>
        </>





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
