import $api from '../helpers/api'

import { createContext, useState, useEffect, useMemo } from 'react'
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie'




export const UserContext = createContext({
    user : null,
    token: null,
    isAuthenticated : false,
    subs: [],

    loadProfile : ()=>0,
    logout : ()=>0,
    subscribe : ()=>0,
    login : ()=>0,
    register : ()=>0,
    sub: ()=>0,
    deleteSub: ()=>0,

})

const UserProvider = ({children}) =>{

    const [user,setUser] = useState(null)
    const [cookies , removeCookie] = useCookies(['auth_token'])
    const [token,setToken] = useState(cookies.auth_token)
    const [subs,setSubs] = useState([])

    const isAuthenticated = useMemo(()=>{
        setToken(cookies.auth_token)
        return !!cookies.auth_token
    },[cookies.auth_token])

    const logout = ()=>{
        removeCookie('auth_token')
        setUser(null)
        Cookies.remove('auth_token')

    }

    const loadProfile = async ()=>{
        if(!isAuthenticated){
            logout()
            return
        }
        // TODO : get user profile
        const res = await $api.get("/me")
        if(res.status == 401){
            setUser(null)
        Cookies.remove('auth_token')
        removeCookie('auth_token')

        }else {

            setUser( res.data.user )
        }
    }

    const subscribe = async (subID,startDate) => {
        if(!isAuthenticated){
            logout()
        }
        const { data } = await $api.post('subscribe',{
            subscriptionId : subID,
             startDate
        })
        setUser(data.user)
    }

    const login = async (email,password)=>{
        const { data } = await $api.post('login',{
            email,
            password
        })
        setUser(data.user)
        setToken(data.token)
        Cookies.set('auth_token',data.token)
    }
    const register = async ({firstName, lastName , phone, email, password})=>{
        // TODO : register user
        const { data } = await $api.post('register',{
         firstName,
         lastName,
         phone,
         email,
        password
        })
        setUser(data.user)
        setToken(data.token)
        Cookies.set('auth_token',data.token)

    }

    const getSubs = async ()=>{

        const { data } = await $api.get('subscriptions')
        setSubs(data.subscriptions)
    }
    const sub = async (id)=>{

        const {data} = await $api.post('subscribe',{
            subscriptionId:id,
            startDate: new Date()
        })
        setUser(data.user)
    }
    const deleteSub = async (id)=>{
        const {data} = await $api.put('subscription',{
            subId:id
        })
        setUser(data.user)
    }

    useEffect(()=>{
        getSubs()
        if(token && !user){
            loadProfile()
        }
    },[user])

    return (
        <UserContext.Provider
        value={{
            user,
            isAuthenticated,
            token,
            loadProfile,
            logout,
            subscribe,
            login,
            register,
            subs,
            sub,
            deleteSub,

        }}
        >
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider