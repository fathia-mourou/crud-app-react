import React from "react";
import NavBar from "./navbar";
import SubscriptionCards from "./subscriptionCards";
import FooterApp from "./footer";
function Subscriptions() {
    return (
        <div>
            <NavBar />
            <div class="text-center">
                <h2 class="mb-10 mt-10 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white mx-auto">Our subscriptions</h2>
            </div>
            <SubscriptionCards />
            <FooterApp />
        </div>
    );
}

export default Subscriptions;