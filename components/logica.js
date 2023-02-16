import axios, { Axios } from 'axios';
import swal from 'sweetalert';



export async function SaveEmployee(EmployeData){
    try {
        // throw new Error
        const res = await axios({
            method:'POST',
            url:'https://api-rest-nodejs-production.up.railway.app/employee',
            data:EmployeData
        })
        swal ({
            title: res.data.mesagee,
            icon: 'success'
        }) ;
        console.log(res.data)

    } catch (error) {
        console.log(error)
        swal ({
            title: "Ocurrio un error",
            icon: 'error'
        }) ;
    }
}
export async function DeleteEmployee(id){

    try {
        const res = await axios({
            method:'DELETE',
            url:`https://api-rest-nodejs-production.up.railway.app/employee/${id}`
        })
        
        console.log(res.data)
        swal ({
            title: res.data.message,
            icon: 'success'
        }) ;
    } catch (error) {
        console.log(error)
    }
}


