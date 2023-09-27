import axios from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
const $api = axios.create({
    baseURL: 'http://127.0.0.1:3001/api/'

})
$api.interceptors.request.use(config=>{
    
    if(Cookies.get('auth_token')){
        if(!config.headers.get('authorization')){
            config.headers.set('authorization', `${Cookies.get('auth_token')}`)
        }
    }
    return config
})

$api.interceptors.response.use(res => {return res },err=>{
    console.log(err);
})


export default $api