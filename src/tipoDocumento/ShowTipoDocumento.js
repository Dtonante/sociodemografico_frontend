import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_TIPO_DOCUMENTO = 'http://localhost:3001/tipodocumentos'

const CompShowTipoDocumento = () => {
    const [tipoDocumento, setTipoDocumento] = useState([])
    useEffect(() => {
        getTipoDocumento()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getTipoDocumento = async () => {
        const res = await axios.get(URI_TIPO_DOCUMENTO)
        setTipoDocumento(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteTipoDocumento = async (id_tipoDocumentoPK) => {
        axios.delete(`${URI_TIPO_DOCUMENTO}${id_tipoDocumentoPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_tipoDocumentoPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tipoDocumento.map((tipoDocumento) => (
                                <tr key= { tipoDocumento.id_tipoDocumentoPK }>
                                    <td> { tipoDocumento.id_tipoDocumentoPK } </td>
                                    <td> { tipoDocumento.var_nombreDocumento } </td>
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

export default CompShowTipoDocumento;