
import Container from '../components/container';
import { useState } from 'react';
import {SaveEmployee} from '../components/logica'
import swal from 'sweetalert';

const Index = () => {
    const [guardar,setGuardar] = useState({
        name_e:'',
        salary:''
    })
    const handleChange = e =>{
        setGuardar({...guardar, [e.target.name]: e.target.value})
    }
    
    const guardarApi = async (e) => {
        e.preventDefault();
        SaveEmployee(guardar)
        
    }
    
    return (
        <div>
            <Container>
                <h1>Insertar nuevo empleado</h1>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Insertar Nuevo Empleado
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                               <form onSubmit={guardarApi} id='idForm' className='form-control' >
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Nombre del Empleado</label>
                                        <input type="text" className="form-control"name='name_e' id="idName" placeholder="Ingrese un Nombre" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Ingrese el Salario</label>
                                        <input type="number" className="form-control" name='salary' id="idSalary" placeholder="" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3 text-center">
                                        <button className='btn btn-success' data-bs-dismiss="modal" >Guardar</button>
                                    </div>


                               </form> 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>

        </div>
    )
}

export default Index;




