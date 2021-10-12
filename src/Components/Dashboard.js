import React from "react";
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {
    Container,
    Row,
    Col,
    Div,
    BackgroundImage,
    Paper,
    H6,
    TextInput,
} from "qdm-component-library";
export default function Dashboard() {
    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
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
                id={"signIn-BackgroundImage"}>
                <Paper style={{
                    backgroundColor: "#FFFFFF",
                    height: "500px",
                    width: "1250px",
                    marginTop: "110px",
                    borderRadius: "20px",

                }}>
                    <Paper style={{
                        backgroundColor: "#56C38E",
                        marginLeft: "22px",
                        marginTop: "20px",
                        marginBottom: "px",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>1</Paper>
                    <Paper style={{
                        marginLeft: "325px",
                        marginTop: "-77.5px",
                        backgroundColor: "#5AA4ED",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>2</Paper>
                    <Paper style={{
                        marginLeft: "628px",
                        marginTop: "-77.5px",
                        backgroundColor: "#E75252",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>3</Paper>
                    <Paper style={{
                        marginLeft: "930.5px",
                        marginTop: "-77.5px",
                        backgroundColor: "#F1A53D",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>4</Paper>
                    <Paper style={{
                        backgroundColor: "#494B64",
                        marginTop: "-6.5px",
                        marginLeft: "22px",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>5</Paper>
                    <Paper style={{
                        marginLeft: "325px",
                        marginTop: "-77.5px",
                        backgroundColor: "#036FA0",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>6</Paper>
                    <Paper style={{
                        marginLeft: "628px",
                        marginTop: "-77.5px",
                        backgroundColor: "#80A3DB",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>7</Paper>
                    <Paper style={{
                        marginLeft: "930.5px",
                        marginTop: "-77.5px",
                        backgroundColor: "#EEBDDD",
                        height: "70px",
                        width: "300px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}>8</Paper>
                </Paper>
                <Paper style={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    height: "120px",
                    width: "1257px",
                    marginTop: "-510px",
                    marginLeft: "-1260px",
                }}>
                    <img src={Anqlogo} alt="anqlogo.svg" style={{ marginTop: "15px" }} />

                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Dashboard" />
                        <Tab label="Leader Board" />
                    </Tabs>
                    <Paper style={{
                        background: "white",
                        height: "55px",
                        width: "200px",
                        marginLeft: "1050px",
                        borderRadius: "10px",
                        marginTop: "-105px",

                    }}>
                        <Stack direction="row" spacing={2} >
                            <Avatar sx={{ width: 45, height: 45, marginLeft: "4.5px", marginTop: "4.5px" }} variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Stack>
                        <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Sathish Rakin</Stack>
                        
                    </Paper>  
                </Paper>
            </BackgroundImage>
        </div>
    )
}
