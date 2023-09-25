import React from "react";
import NavBar from "./navbar";
import SliderApp from "./slider";
import FormContact from "./form";
import FooterApp from "./footer";
import {Grid,Container} from '@mui/material';

function Contact() {
    return (
        <div>
            <Container maxWidth="lg">
            <NavBar />
            <SliderApp />
            <div class="mb-20 mt-10">
            <Grid container spacing={2} columns={16} justifyContent="center" >
                <Grid item xs={8}>
                    <h1 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">Contact us</h1>
                </Grid>
                <Grid item xs={8} justifyContent="center" alignItems="center">
                    <FormContact />
                </Grid>
            </Grid>
            </div>
            </Container>
            <FooterApp />
        </div>
    );
}

export default Contact;