import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

const CrudEquipo = () => {
    const { register, handleSubmit } = useForm();
    const { crudEquipo } = useParams()
    
    const crearJugador = () =>{
        
    }

    return (
        <div>
            <h1>{crudEquipo}</h1>
            <form onSubmit={handleSubmit(crearJugador)}>
                <label>Nombre jugador:</label>
                <input type="text" />

                <label>Edad:</label>
                <input type="number" />

                <label>Posicion</label>
                <input type="text" />

                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default CrudEquipo