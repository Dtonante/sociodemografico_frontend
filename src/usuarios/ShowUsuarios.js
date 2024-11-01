import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_USUARIOS = 'http://localhost:3001/usuarios'

const CompShowUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        getUsuarios()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getUsuarios = async () => {
        const res = await axios.get(URI_USUARIOS)
        setUsuarios(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteUsuario = async (id_usuarioPK) => {
        axios.delete(`${URI_USUARIOS}${id_usuarioPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_usuarioPK</th>
                                <th scope="col">Nombre completo</th>
                                <th scope="col">tipo documento</th>
                                <th scope="col">numero documento</th>
                                <th scope="col">genero</th>
                                <th scope="col">correo personal</th>
                                <th scope="col">correo institucional</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuarios) => (
                                <tr key= { usuarios.id_usuarioPK }>
                                    <td> { usuarios.id_usuarioPK } </td>
                                    <td> { usuarios.var_nombreCompleto } </td>
                                    <td> { usuarios.int_tipoDocumentoFK } </td>
                                    <td> { usuarios.var_numeroDocumento } </td>
                                    <td> { usuarios.var_genero } </td>
                                    <td> { usuarios.var_correoElectronicoPersonal } </td>
                                    <td> { usuarios.var_correoElectronicoInstitucional } </td>
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

export default CompShowUsuarios;