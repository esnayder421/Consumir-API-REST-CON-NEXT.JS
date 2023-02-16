import Container from '../components/container';
import fetch from 'isomorphic-fetch';
import {DeleteEmployee} from '../components/logica'
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/router';


const Employees = (props) =>{
    const [data,setdata] = useState({
        data:''
    })
     const [id,setid] = useState({
        id:''
    })
    const router = useRouter()
     useEffect( ()=>{
        router.push('/employee')
     }, [id])


     const Eliminar = (id) => {
        DeleteEmployee(id)
        setid(id +1)
    }
   
    return (
        <div>
            <Container>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">SALARIO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        props.resJson.map(employee =>(
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name_e}</td>
                                <td>{employee.salary}</td>
                                <td>
                                <button  className='btn btn-info' >Editar</button>
                                
                                    <input type="hidden" id='id' name='id' value={employee.id} ></input>
                                    <button onClick={Event =>Eliminar(employee.id)} className='btn btn-danger'>Eliminar</button>
                                
                                
                                </td> 
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </Container>
        </div>
        
    )

    
}
export async function getServerSideProps() {
    const res = await fetch('https://api-rest-nodejs-production.up.railway.app/employee')
    const resJson = await res.json()
    return {props:{resJson}}
}



export default Employees;






