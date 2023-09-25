import React from "react";
import NavBar from "./navbar";
import FooterApp from "./footer";
import SubscriptionsList from "./subscriptionsList";
function UserDashboard() {
    return ( 
        <div>
        <NavBar/>
        <SubscriptionsList/>
        <FooterApp/>
        </div>
     );
}

export default UserDashboard;