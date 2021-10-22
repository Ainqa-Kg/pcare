import React from "react";
import backgroundImage from './d1.png'
import Anqlogo from './anqlogo.svg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container, Row, Col, Div, BackgroundImage, Paper, H6, TextInput, } from "qdm-component-library";
import Typography from '@mui/material/Typography';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import SearchBar from "material-ui-search-bar";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import "./ApiDocs.css";
import Apitable from "./Apitable"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        borderRadius: "15px 0px 0px 15px",
        backgroundColor: '#00205C',
        border: '0px solid #ced4da',
        fontSize: 12,
        color: 'white',
        padding: '4px 25px 9px 10px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0rem rgba(0,123,255,.25)',
        },
    },
}));


const CustomButtonRoot = styled('span')(`
  background-color: #00205C;
  padding: 4px 20px;
  margin-left: 120px;
  color: #fff;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);

  &:hover {
    background-color: #00205C;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`);

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function Logger() {
    const [value, setValue] = React.useState();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
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
                    height: "510px",
                    width: "1250px",
                    marginTop: "110px",
                    borderRadius: "20px",
                    overflowY: "scroll",
                    scrollbarColor: "rebeccapurple green",
                    scrollbarWidth: "thin"

                }}>

                    <KeyboardBackspaceOutlinedIcon style={{

                        marginLeft: "14px",
                        width: "20px",
                        marginTop: "16px",
                    }} onclick={window.history.back()} />

                    <Typography variant="h6"
                        component="div"
                        color="#oooooo"
                        marginLeft="8px"
                        gutterBottom
                        style={{
                            marginTop: "-33px",
                            marginLeft: "45px",
                            marginBottom: "-34px",
                            fontFamily: "lato"
                        }} >
                        API Docs
                    </Typography>

                    <TextInput
                        placeholder="valid password"
                        style={{
                            borderColor: "E1E1E1C",
                            marginTop: "40px",
                            marginLeft: "95px",
                            borderRadius: "0px 25px 25px 0px",
                            fontSize: "10px",
                            height: "30px",
                            width: "1105px",
                            align: "center"
                        }}
                        hoverColor="#0071F2"
                    />
                    <TextInput
                        style={{
                            borderColor: "E1E1E1C",
                            marginTop: "20px",
                            marginLeft: "17px",
                            borderRadius: "15px",
                            fontSize: "10px",
                            height: "300px",
                            width: "800px",
                            align: "center"
                        }}
                        hoverColor="#0071F2"
                    />

                    <Paper style={{
                        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                        marginTop: "-300px",
                        marginLeft: "900px",
                        borderRadius: "10px",
                        height: "250px",
                        width: "300px",
                        align: "center"
                    }}>
                        <TextInput
                            placeholder="URL"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "00px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="client Id"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="Client key"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="Ord Id"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="DomainForShortUrl"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="ttl"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="Preferred ttl"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />
                        <TextInput
                            placeholder="ttl types"
                            style={{
                                borderColor: "E1E1E1C",
                                marginTop: "10px",
                                arginBottom: "-50px",
                                borderRadius: "10px",
                                fontSize: "10px",
                                height: "10px",
                                width: "300px",
                                align: "center"
                            }}
                            hoverColor="#0071F2"
                        />

                        <CustomButton style={{
                            borderRadius: "15px",
                        }}>Try</CustomButton>
                    </Paper>

                    <Apitable />

                    <FormControl style={{
                        marginTop: "-894.5px",
                        width: "80px",
                        marginLeft: "16px",
                    }}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}>

                            <option value={10} style={{
                                color: "#00205C",
                            }}>Post</option>
                            <option value={20} style={{
                                color: "#00205C",
                            }} >Get</option>
                            <option value={30} style={{
                                color: "#00205C",
                            }}>Put</option>
                            <option value={40} style={{
                                color: "#00205C",
                            }}>Delete</option>
                        </NativeSelect>
                    </FormControl>
                </Paper>
                <Paper style={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    height: "120px",
                    width: "1257px",
                    marginTop: "-510px",
                    marginLeft: "-1260px",
                }}>
                    <img src={Anqlogo} alt="anqlogo.svg" style={{ marginTop: "15px", marginLeft: "-3px" }} />

                    <Paper style={{
                        background: "white",
                        height: "55px",
                        width: "200px",
                        marginLeft: "1050px",
                        borderRadius: "10px",
                        marginTop: "-60px",
                    }}>

                        <Stack direction="row" spacing={2} >
                            <Avatar sx={{ width: 45, height: 45, marginLeft: "4.5px", marginTop: "4.5px" }} variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Stack>
                        <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Donald Trump </Stack>
                    </Paper>
                </Paper>
            </BackgroundImage>
        </div>
    )
}



