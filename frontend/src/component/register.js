'use client';
import { Card } from 'flowbite-react';
import { Button, Label, TextInput } from 'flowbite-react';
import React,{ useState,useContext ,useEffect } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
function Register() {
    const {register,user} = useContext(UserContext)
    const [data,setData] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        if(!!user){
          navigate('/dashboard')
        }
      },[user])
    const handleRegister =  ()=> {
    register(data)
    }
    return (
        <div class="flex items-center justify-center h-screen">
        <Card className="max-w-sm" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p> Register Now</p>
          </h5>
        <form className="flex max-w-md flex-col gap-4">
            <div className="flex space-x-4">
                <div className="flex-grow mb-2">
                    <Label htmlFor="name" value="First Name" />
                <TextInput id="name" placeholder="first name" required shadow type="text" onChange={(e)=>{
                    setData({...data,firstName:e.target.value})
                }}   />
                </div>
            
            <div>
                <div className="flex-grow mb-2">
                    <Label htmlFor="name" value="Last Name" />
                <TextInput id="last-name" placeholder="Last name" required shadow type="text" onChange={(e)=>{
                    setData({...data,lastName:e.target.value})
                }} />
                </div>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email2" value="Email" />
                </div>
                <TextInput id="email2" placeholder="Your email" required shadow type="email" onChange={(e)=>{
                    setData({...data,email:e.target.value})
                }} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone Number" />
                </div>
                <TextInput id="phone" placeholder="Your phone number" required shadow type="number" onChange={(e)=>{
                    setData({...data,phone:e.target.value})
                }} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput id="password2" required shadow type="password" onChange={(e)=>{
                    setData({...data,password:e.target.value})
                }} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput id="repeat-password" required shadow type="password" />
            </div>
            <Button className='bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded w-full' onClick={handleRegister}>
                Register new account
            </Button>
        </form>
        </Card>
    </div>
    );
}
export default Register;