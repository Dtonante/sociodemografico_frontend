import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_ESPACIO_HOGAR = 'http://localhost:3001/espacios'

const CompShowEspaciosHogar = () => {
    const [espacioHogar, setEspacioHogar] = useState([])
    useEffect(() => {
        getEspacioHogar()
    }, [])

    //Procedimiento para mostrar todas las eps
    const getEspacioHogar = async () => {
        const res = await axios.get(URI_ESPACIO_HOGAR)
        setEspacioHogar(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteEspacioHogar = async (id_espacioHogarPK) => {
        axios.delete(`${URI_ESPACIO_HOGAR}${id_espacioHogarPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_espacioHogarPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {espacioHogar.map((espacioHogar) => (
                                <tr key= { espacioHogar.id_espacioHogarPK }>
                                    <td> { espacioHogar.id_espacioHogarPK } </td>
                                    <td> { espacioHogar.var_nombreEspacio } </td>
                                    <td>
                                        {/* <Link to={`/editar/${eps.id_espacioHogarPK}`} className="btn btn-info">Editar</Link> */}
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

export default CompShowEspaciosHogar;