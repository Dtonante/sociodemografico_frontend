import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_SERVICIO_SALUD_ADICIONAL = 'http://localhost:3001/servicioSaludAdicional'

const CompShowServicioDeSaludAdicional = () => {
    const [servicioSaludAdicional, setServicioSaludAdicional] = useState([])
    useEffect(() => {
        getServicioSaludAdicional()
    }, [])

    //Procedimiento para mostrar todas las ServicioSaludAdicional
    const getServicioSaludAdicional = async () => {
        const res = await axios.get(URI_SERVICIO_SALUD_ADICIONAL)
        setServicioSaludAdicional(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteServicioSaludAdicional = async (id_servicioDeSaludAdicionalPK) => {
        axios.delete(`${URI_SERVICIO_SALUD_ADICIONAL}${id_servicioDeSaludAdicionalPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_servicioDeSaludAdicionalPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicioSaludAdicional.map((servicioSaludAdicional) => (
                                <tr key= { servicioSaludAdicional.id_servicioDeSaludAdicionalPK }>
                                    <td> { servicioSaludAdicional.id_servicioDeSaludAdicionalPK } </td>
                                    <td> { servicioSaludAdicional.var_nombreServicioDeSaludAdicional } </td>
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

export default CompShowServicioDeSaludAdicional;