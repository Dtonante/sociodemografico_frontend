import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI_ANTECEDENTE_MEDICO = 'http://localhost:3001/antecedentesMedicos'

const CompShowAntecedentesMedicos = () => {
    const [antecedenteMedico, setAntecedentesMedicos] = useState([])
    useEffect(() => {
        getAntecedentesMedicos()
    }, [])

    //Procedimiento para mostrar todas los antecedentes medicos
    const getAntecedentesMedicos = async () => {
        const res = await axios.get(URI_ANTECEDENTE_MEDICO)
        setAntecedentesMedicos(res.data)

    }

    //Procedimiento para eliminar una eps
    const deleteAntecedenteMedico = async (id_antecedenteMedicoPK) => {
        axios.delete(`${URI_ANTECEDENTE_MEDICO}${id_antecedenteMedicoPK}`)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/crear" className="btn btn-primary mt-2 mb-2"><i class="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id_antecedenteMedicoPK</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {antecedenteMedico.map((antecedenteMedico) => (
                                <tr key= { antecedenteMedico.id_antecedenteMedicoPK }>
                                    <td> { antecedenteMedico.id_antecedenteMedicoPK } </td>
                                    <td> { antecedenteMedico.var_nombreAntecedenteMedico } </td>
                                    <td>
                                        <Link to={`/editar/${antecedenteMedico.id_antecedenteMedicoPK}`} className="btn btn-info"><i class="fa-regular fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteAntecedenteMedico(antecedenteMedico.id_antecedenteMedicoPK)} className="btn btn-danger"><i class="fa-regular fa-trash-can"></i> </button>
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

export default CompShowAntecedentesMedicos;