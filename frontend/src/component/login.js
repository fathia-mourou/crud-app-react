'use client';

import React,{ useContext, useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Card } from 'flowbite-react';
import { Button, Label, TextInput } from 'flowbite-react';
import {UserContext} from '../context/user'
function Login() {
  const {login, isAuthenticated,user} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password,setPassword ] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    if(!!user){
      navigate('/dashboard')
    }
  },[user])
  
  const handleClick =async (e) =>{
    e.preventDefault()
    login(email,password)

  } 
  return (
    <div class="flex items-center justify-center h-screen">
      <Card className="max-w-sm" href="#">
        <h5 className="text-center	 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p> Welcome to Cozi coworking space</p>
          <p>Login</p>
        </h5>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" required type="email" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="flex space-x-4 justify-center">
            <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded w-full" onClick={(e)=>handleClick(e)}>
              login
            </button>
            <Link to="/register">
            <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded w-full" >
              Register
            </button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;