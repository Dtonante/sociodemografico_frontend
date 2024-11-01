import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_SERVICIO_QUE_NO_CUENTAN = 'http://localhost:3001/serviciosQueNoCuentan'

const CompShowServiciosQueNoCuentan = () => {
    const [servicioQueNoCuentan, setServicioQueNoCuentan] = useState([])
    useEffect(() => {
        getServicioQueNoCuentan()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getServicioQueNoCuentan = async () => {
        const res = await axios.get(URI_SERVICIO_QUE_NO_CUENTAN)
        setServicioQueNoCuentan(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteEps = async (id_servicioQueNoCuentaPK) => {
        axios.delete(`${URI_SERVICIO_QUE_NO_CUENTAN}${id_servicioQueNoCuentaPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_epsPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicioQueNoCuentan.map((servicioQueNoCuentan) => (
                                <tr key= { servicioQueNoCuentan.id_servicioQueNoCuentaPK }>
                                    <td> { servicioQueNoCuentan.id_servicioQueNoCuentaPK } </td>
                                    <td> { servicioQueNoCuentan.var_nombreServicioQueNoCuenta } </td>
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

export default CompShowServiciosQueNoCuentan;