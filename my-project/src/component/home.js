import React from 'react';
import NavBar from './navbar';
import Slider from './slider';
import SubscriptionCards from './subscriptionCards';
import {Spacer} from "@nextui-org/react";
import FooterApp from './footer';

export default function Home() {
  return (
    <div >
    <NavBar/>
    <Spacer y={10} />
    <Slider/>
    <SubscriptionCards/>
    <Spacer y={10} />
    <FooterApp/>
    </div>
  )
}


