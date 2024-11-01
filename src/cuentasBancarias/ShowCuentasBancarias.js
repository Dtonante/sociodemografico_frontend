import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_CUENTAS_BANCARIAS = 'http://localhost:3001/cuentasBancarias'

const CompShowCuentasBancarias = () => {
    const [cuentaBancaria, setCuentaBancaria] = useState([])
    useEffect(() => {
        getCuentasBancarias()
    }, [])

    //Procedimiento para mostrar todas las cuentas bancarias
    const getCuentasBancarias = async () => {
        const res = await axios.get(URI_CUENTAS_BANCARIAS)
        setCuentaBancaria(res.data)

    }

    //Procedimiento para eliminar una cuenta bancaria
    const deleteCuentaBancaria = async (id_cuentaBancariaPK) => {
        axios.delete(`${URI_CUENTAS_BANCARIAS}${id_cuentaBancariaPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_cuentaBancariaPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuentaBancaria.map((cuentaBancaria) => (
                                <tr key= { cuentaBancaria.id_cuentaBancariaPK }>
                                    <td> { cuentaBancaria.id_cuentaBancariaPK } </td>
                                    <td> { cuentaBancaria.var_nombreCuentaBancaria } </td>
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

export default CompShowCuentasBancarias;