import React,{useEffect,useContext} from "react";
import NavBar from "./navbar";
import FooterApp from "./footer";
import SubscriptionsList from "./subscriptionsList";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";


function UserDashboard() {
    const navigate = useNavigate()
    const {user,token} = useContext(UserContext)
    useEffect(()=>{
        if(!user && !token){
          
          navigate('/')
        }
      },[user,token])
    return ( 
        <div>
        <NavBar/>
        <SubscriptionsList/>
        <FooterApp/>
        </div>
     );
}

export default UserDashboard;