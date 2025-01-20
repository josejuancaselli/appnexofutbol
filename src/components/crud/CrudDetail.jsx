import { Link, useParams } from "react-router-dom"


const CrudDetail = ({ ligas }) => {

    const { crud } = useParams()

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