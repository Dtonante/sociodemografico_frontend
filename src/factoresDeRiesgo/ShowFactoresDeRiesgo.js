import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_FACTORES_RIESGO = 'http://localhost:3001/factoresRiesgo'

const CompShowFactoresDeRiesgo = () => {
    const [factoresDeRiesgo, setFactoresDeRiesgo] = useState([])
    useEffect(() => {
        getFactoresDeRiesgo()
    }, [])

    //Procedimiento para mostrar todas las FactoresDeRiesgo
    const getFactoresDeRiesgo = async () => {
        const res = await axios.get(URI_FACTORES_RIESGO)
        setFactoresDeRiesgo(res.data)

    }

    //Procedimiento para eliminar una FactoresDeRiesgo
    const deleteFactoresDeRiesgo = async (id_factoresRiesgoPK) => {
        axios.delete(`${URI_FACTORES_RIESGO}${id_factoresRiesgoPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_factoresRiesgoPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {factoresDeRiesgo.map((factoresDeRiesgo) => (
                                <tr key= { factoresDeRiesgo.id_factoresRiesgoPK }>
                                    <td> { factoresDeRiesgo.id_factoresRiesgoPK } </td>
                                    <td> { factoresDeRiesgo.var_nombreRiesgo } </td>
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

export default CompShowFactoresDeRiesgo;