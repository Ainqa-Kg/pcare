import React from "react";
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import { baseurl } from "./urlconst"
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    // Avatar,
    Div,
    Button,
    BackgroundImage,
    Paper,
    H6,
    TextInput,
} from "qdm-component-library";


export default function dashboard() {
    return (
        <div>
             <Container
                    key={"0"}
                    name="container"
                    fluid={true}
                    style={{
                        backgroundColor: "",
                        height: "100vh",
                        padding: "0px",
                    }}
                    id={"signIn-Container"}
                >
                    <BackgroundImage
                        key={"0"}
                        backgroundPosition="0% 0%"
                        backgroundPositionX="center"
                        backgroundPositionY="center"
                        backgroundRepeat="no-repeat"
                        backgroundRepeatX="no-repeat"
                        backgroundRepeatY="no-repeat"
                        backgroundPosition='center'
                        inLineStyles="[object Object]"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "calc(100vh - 0px)",
                        }}
                        id={"signIn-BackgroundImage"}

                    >
                        
                        <Paper
                            key={"0"}
                            children="Paper"
                            variant="elevation"
                            elevation="1"
                            style={{
                                width: "1296px",
                                height: "550px",
                                marginTop: "100px",
                                                           
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                             
                            }}
                            
                        >
                          
                        </Paper>
                                 </BackgroundImage>
                </Container>

        </div>
    )
}
