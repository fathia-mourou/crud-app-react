import axios from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
const $api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/'

})
$api.interceptors.request.use(config=>{

    if(Cookies.get('auth_token')){
        if(!config.headers.get('Authorization')){
            config.headers.set('Authorization', `Bearer ${Cookies.get('auth_token')}`)
        }
    }
    return config
})

$api.interceptors.response.use(res => {return res },err=>{
toast(err.response.data.message,{type : 'error'})
})


export default $api