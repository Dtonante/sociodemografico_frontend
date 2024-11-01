import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_FONDO_PENSION = 'http://localhost:3001/fondoPension'

const CompShowFondoDePension = () => {
    const [fondoDePension, setFondoDePension] = useState([])
    useEffect(() => {
        getFondoDePension()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getFondoDePension = async () => {
        const res = await axios.get(URI_FONDO_PENSION)
        setFondoDePension(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteEps = async (id_fondoPensionPK) => {
        axios.delete(`${URI_FONDO_PENSION}${id_fondoPensionPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_fondoPensionPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fondoDePension.map((fondoDePension) => (
                                <tr key= { fondoDePension.id_fondoPensionPK }>
                                    <td> { fondoDePension.id_fondoPensionPK } </td>
                                    <td> { fondoDePension.var_nombreFondoPension } </td>
                                    <td>
                                        {/* <Link to={`/editar/${eps.id_fondoPensionPK}`} className="btn btn-info">Editar</Link> */}
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

export default CompShowFondoDePension;