import React,{useContext} from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Grid from '@mui/material/Grid';
import {Spacer} from "@nextui-org/react";
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';



function SubscriptionCards() {
    const {subs,user,sub} = useContext(UserContext)
    const navigate = useNavigate()

    const handleBook = (e,id)=>{
        e.preventDefault()
        if(user === null){
        navigate('/login')
        }else{
            sub(id);
            navigate('/dashboard')
        }

    }
    return (
        <div class="mb-10 mt-10">
            <Grid container justifyContent="center" alignItems="center" spacing={2} >
                {
                    subs?.slice(0,3).map((sub,index)=>{
                        return (
                            <Grid item key={sub._id}>
                            <Card className="max-w-[400px] mx-auto">
                                <CardHeader className="flex gap-3 items-center justify-center">
                                    <div className="flex flex-col text-center">
                                        <p className="text-lg font-bold">{sub.name}</p>
                                        <p className="text-small text-default-500">{sub.duration} day(s)</p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody className="text-center">
                                    <h2>{sub.price} TND/month</h2>
                                    <p>{sub.description}</p>
                                </CardBody>
                                <Divider />
                                <CardFooter className="text-center" >
                                    <button
                                        onClick={(e)=>handleBook(e,sub._id)}
                                    >
                                       Book now
                                    </button>
                                </CardFooter>
                            </Card>
                        </Grid>
                        )
                    })
                }

            </Grid>
            <Spacer y={10} />
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
            {
                    subs?.slice(3).map((sub,index)=>{
                        return (
                            <Grid item key={sub._id}>
                            <Card className="max-w-[400px] mx-auto">
                                <CardHeader className="flex gap-3 items-center justify-center">
                                    <div className="flex flex-col text-center">
                                        <p className="text-lg font-bold">{sub.name}</p>
                                        <p className="text-small text-default-500">{sub.duration} day(s)</p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody className="text-center">
                                    <h2>{sub.price} TND/month</h2>
                                    <p>{sub.description}</p>
                                </CardBody>
                                <Divider />
                                <CardFooter className="text-center" >
                                    <button
                                        onClick={(e)=>handleBook(e,sub._id)}
                                    >
                                       Book now
                                    </button>
                                </CardFooter>
                            </Card>
                        </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default SubscriptionCards;