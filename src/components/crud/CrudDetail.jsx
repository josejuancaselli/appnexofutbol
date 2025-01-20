// este componente se encarga de mostrar las ligas en el "/crud" a medida que se van creando. Tambien sirve como DIV para el inicio

import { Link, useParams } from "react-router-dom"


const CrudDetail = ({ ligas }) => {

    const { crud } = useParams() //lo uso solo para mostrar el boton de borrar liga cuando estoy en editar ligas

    return (
        <div>
            {ligas.map((liga) => (
                <li key={liga.id}>
                    <p>Liga {liga.nombre_liga}</p>
                    <Link to={`/crud/${liga.nombre_liga}`}>Editar</Link> {/*link que me lleva al componente CrudLigas*/}
                    {crud && <button> borrar liga </button>}
                </li>
            ))}
        </div>
    )
}

export default CrudDetail