import $api from '../helpers/api'

import { createContext, useState, useEffect, useMemo } from 'react'
import { useCookies } from 'react-cookie';




export const UserContext = createContext({
    user : null,
    token: null,
    isAuthenticated : false,

    loadProfile : ()=>0,
    logout : ()=>0,
    subscribe : ()=>0,
    login : ()=>0,
    register : ()=>0,
})

const UserProvider = ({children}) =>{

    const [user,setUser] = useState(null)
    const [cookies , removeCookie] = useCookies(['auth_token'])
    const [token,setToken] = useState(cookies.auth_token)

    const isAuthenticated = useMemo(()=>{
        setToken(cookies.auth_token)
        return !!cookies.auth_token
    },[cookies.auth_token])

    const logout = ()=>{
        removeCookie('auth_token')
        setUser(null)

    }

    const loadProfile = async ()=>{
        if(!isAuthenticated){
            logout()
            return
        }
        // TODO : get user profile
        const { data } = await $api.get("/")
        setUser( data )
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
    }
    const register = async (username,password)=>{
        // TODO : register user
    }




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

        }}
        >
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider