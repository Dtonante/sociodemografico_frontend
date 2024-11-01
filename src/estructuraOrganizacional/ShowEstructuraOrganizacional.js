import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_ESTRUCTURA_ORGANIZACIONAL = 'http://localhost:3001/estructuraOrganizacional'

const CompShowEstructuraOrganizacional = () => {
    const [estructuraOrganizacional, setEstructuraOrganizacional] = useState([])
    useEffect(() => {
        getEstructuraOrganizacional()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getEstructuraOrganizacional = async () => {
        const res = await axios.get(URI_ESTRUCTURA_ORGANIZACIONAL)
        setEstructuraOrganizacional(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteEps = async (id_areaPk) => {
        axios.delete(`${URI_ESTRUCTURA_ORGANIZACIONAL}${id_areaPk}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_areaPk</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estructuraOrganizacional.map((estructuraOrganizacional) => (
                                <tr key= { estructuraOrganizacional.id_areaPk }>
                                    <td> { estructuraOrganizacional.id_areaPk } </td>
                                    <td> { estructuraOrganizacional.var_nombreArea } </td>
                                    <td>
                                        {/* <Link to={`/editar/${eps.id_areaPk}`} className="btn btn-info">Editar</Link> */}
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

export default CompShowEstructuraOrganizacional;