import React from "react";
import NavBar from "./navbar";
import SliderApp from "./slider";
import FormContact from "./form";
import FooterApp from "./footer";
import { Grid, Container } from '@mui/material';
import {CiMail, CiLocationOn, CiPhone} from 'react-icons/ci';

function Contact() {
    return (
        <div>
            <Container maxWidth="lg">
                <NavBar />
                <SliderApp />
                <div class="mb-20 mt-10">
                    <Grid container spacing={2} columns={16} justifyContent="center" alignItems="center">
                        <Grid item xs={8}>
                        <h1 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h1>
                            <div className="flex items-center mt-4">
                                <CiLocationOn className="mr-2 text-primary text-2xl" />
                                <p>cozi coworking, la marina, houmt souk, Djerba</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <CiPhone className="mr-2 text-primary text-2xl" />
                                <p>contact@cozi.tn</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <CiMail className="mr-2 text-primary text-2xl" />
                                <p>(+216) 56 550 680</p>
                            </div>
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