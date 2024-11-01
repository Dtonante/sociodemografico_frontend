import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_TRANSPORTE_PROPIO = 'http://localhost:3001/transportePropio'

const CompShowTransportePropio = () => {
    const [transportePropio, setTransportePropio] = useState([])
    useEffect(() => {
        getTransportePropio()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getTransportePropio = async () => {
        const res = await axios.get(URI_TRANSPORTE_PROPIO)
        setTransportePropio(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteTransportePropio = async (id_transportePropioPK) => {
        axios.delete(`${URI_TRANSPORTE_PROPIO}${id_transportePropioPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_transportePropioPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transportePropio.map((transportePropio) => (
                                <tr key= { transportePropio.id_transportePropioPK }>
                                    <td> { transportePropio.id_transportePropioPK } </td>
                                    <td> { transportePropio.var_nombreTransporte } </td>
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

export default CompShowTransportePropio;