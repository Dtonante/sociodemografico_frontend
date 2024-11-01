import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_TIEMPO_LIBRE = 'http://localhost:3001/tiempoLibre'

const CompShowTiempoLibre = () => {
    const [tiempoLibre, setTiempoLibre] = useState([])
    useEffect(() => {
        getTiempoLibre()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getTiempoLibre = async () => {
        const res = await axios.get(URI_TIEMPO_LIBRE)
        setTiempoLibre(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteTiempoLibre = async (id_tiempoLibrePK) => {
        axios.delete(`${URI_TIEMPO_LIBRE}${id_tiempoLibrePK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_tiempoLibrePK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiempoLibre.map((tiempoLibre) => (
                                <tr key= { tiempoLibre.id_tiempoLibrePK }>
                                    <td> { tiempoLibre.id_tiempoLibrePK } </td>
                                    <td> { tiempoLibre.var_nombreOcuapacionTiempoLibre } </td>
                                    <td>
                                        {/* <Link to={`/editar/${eps.id_epsPK}`} className="btn btn-info">Editar</Link> */}
                                        <button className="btn btn-danger"><i class="fa-regular fa-trash-can"></i> </button>
                                    </td>
                                </tr>

                            ))}


                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )

}

export default CompShowTiempoLibre;