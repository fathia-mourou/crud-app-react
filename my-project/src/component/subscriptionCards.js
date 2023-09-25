import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import Grid from '@mui/material/Grid';
import {Spacer} from "@nextui-org/react";


function SubscriptionCards() {
    return (
        <div class="mb-10 mt-10">
            <Grid container justifyContent="center" alignItems="center" spacing={2} >
                <Grid item>
                    <Card className="max-w-[400px] mx-auto">
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col text-center" >
                                <p className="text-lg font-bold">Swi3a</p>
                                <p className="text-small text-default-500">1 hour of work</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-center">
                            <h2>3.5 TND/session</h2>
                            <p>Got something quick to do? You can sit back and finish it.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="text-center">
                            <Link href="#">
                            Book now
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className="max-w-[400px] mx-auto">
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col text-center">
                                <p className="text-lg font-bold">Talla</p>
                                <p className="text-small text-default-500">one day</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <h2>22 TND/day</h2>
                            <p>Ideal if you're visiting Djerba and looking for a place to work.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                href="#"
                            >
                                Book now
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className="max-w-[400px] mx-auto">
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col text-center">
                                <p className="text-lg font-bold">Chelouech</p>
                                <p className="text-small text-default-500">7 days a month</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-center">
                            <h2>90 TND/month</h2>
                            <p>You have 7 days a month to choose from.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="text-center">
                            <Link
                                href="#"
                            >
                               Book now
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
            </Grid>
            <Spacer y={10} />
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Card className="max-w-[400px] mx-auto">
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col text-center">
                                <p className="text-lg font-bold">Weld eddar</p>
                                <p className="text-small text-default-500">5 days a week</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-center">
                            <h2>200 TND/month</h2>
                            <p>Set up from Monday to Friday. Share and develop with startups, freelancers and NGOs.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="text-center">
                            <Link
                                href="#"
                            >
                                Book now
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className="max-w-[400px] mx-auto">
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col text-center">
                                <p className="text-lg font-bold">Grant</p>
                                <p className="text-small text-default-500">We support certain activities</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-center">
                            <h2>-30%</h2>
                            <p>Ne offer you a 30% discount if you are: a pupil, student or volunteer/intern.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                href="#"
                            >
                                Book now
                            </Link>
                        </CardFooter>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default SubscriptionCards;