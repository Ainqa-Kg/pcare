import React from 'react'
import { TextInput, Paper, H6 } from "qdm-component-library";
import IconButton from '@mui/material/IconButton';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from "react";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { FaStarOfLife } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        borderRadius: "0px 15px 15px 0px",
        height: "14px",
        border: '1px solid #A3A0A0 ',
        textAlign: "Right",
        fontSize: 12,
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
  margin-left: 200px;
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



export default function Popupdate() {
    const [opentoggle, setOpentoggle] = useState(false)
    const [validity, setValidity] = React.useState('');
    const handleChange = (event) => {
        setValidity(event.target.value);
    };
    return (
        <Paper style={{
            height: "250px",
            width: "500px",
            marginTop: "200px",
            marginLeft: "435px",
            borderRadius: "15px",
        }}>
            <IconButton
                style={{
                    marginTop: "15px",
                    marginBottom: "-10.5px",
                    marginLeft: "400px",
                }}
                aria-label="expand row"
                size="small"
                onClick={() => setOpentoggle(!opentoggle)}
            >{console.log("opentoggle", opentoggle)}
                {opentoggle ? <ToggleOnIcon style={{ color: "#09AD06" }} /> : <ToggleOffIcon />}
            </IconButton>

            <CgClose style={{
                marginTop: "10px",
                marginLeft: "30px",

                width: "20px",

            }} />

            <H6
                name="Paste your long URL here:"
                style={{
                    fontSize: "12px",
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "-17px",
                    fontStyle: "lato",
                    fontWeight: 'bold',

                }} />

            <H6
                name="Status"
                style={{
                    fontSize: "12px",
                    width: "200px",
                    marginLeft: "360px",
                    marginTop: "-18px",
                    fontStyle: "lato",
                    fontWeight: 'bold',

                }} />
            <TextInput
                placeholder="paste your url"
                style={{
                    borderColor: "E1E1E1C",
                    marginTop: "10px",
                    marginBottom: "-10px",
                    borderRadius: "25px",
                    marginLeft: "20px",
                    fontSize: "10px",
                    height: "25px",
                    width: "460px",
                    align: "center",
                    boxShadow: " 00px 0px 10px, rgba(0, 0, 0, 0.25)"
                }}
                               
                 
                hoverColor="#0071F2"
            />
            <H6
                name="Client key"
                style={{
                    fontSize: "12px",
                    width: "200px",
                    marginLeft: "20px",
                    marginTop: "35px",
                    fontStyle: "lato",
                    fontWeight: 'bold',

                }} />

            <H6
                name="Validity Period"
                style={{
                    fontSize: "12px",
                    width: "200px",
                    marginLeft: "290px",
                    marginTop: "-19px",
                    fontStyle: "lato",
                    fontWeight: 'bold',

                }} />

            <TextInput
                placeholder="client key"
                style={{
                    borderColor: "E1E1E1C",
                    marginTop: "10px",
                    borderRadius: "25px",
                    marginLeft: "20px",
                    fontSize: "10px",
                    height: "25px",
                    width: "190px",
                    align: "center",

                }}
                hoverColor="#0071F2"
            />

            <Paper style={{
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                marginTop: "-30px",
                marginLeft: "290px",
                fontSize: "10px",
                height: "30px",
                width: "190px",
                align: "center",

            }}>
                <TextInput
                    placeholder="validity"
                    style={{
                        borderColor: "E1E1E1C",
                        marginTop: "5px",
                        borderRadius: "25px 0px 0px 25px",
                        marginLeft: "0px",
                        fontSize: "10px",
                        height: "25px",
                        width: "130px",
                        align: "center",

                    }}
                    hoverColor="#0071F2"
                />
                <NativeSelect
                    style={{
                        display: "flex",
                        borderColor: "E1E1E1C",
                        marginTop: "-25px",
                        borderRadius: "25px",
                        marginLeft: "129px",
                        fontSize: "10px",
                        width: "61px",
                        align: "center",

                    }}
                    id="demo-customized-select-native"
                    value={validity}
                    onChange={handleChange}
                    input={<BootstrapInput />}>

                    <option value={10} style={{
                        color: "#00205C",
                    }}>Minute</option>
                    <option value={20} style={{
                        color: "#00205C",
                    }} >Hour</option>
                    <option value={30} style={{
                        color: "#00205C",
                    }}>Week</option>

                </NativeSelect>

            </Paper >

            <Paper style={{
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                marginTop: "25px",
                marginLeft: "10px",
                fontSize: "10px",
                height: "30px",
                width: "185px",
                align: "center",

            }}>
                <CustomButton style={{
                    borderRadius: "15px",
                }}>Shorten</CustomButton>
            </Paper>

            <Paper style={{
                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                height: "250px",
                width: "500px",
                marginTop: "-225px",
                marginLeft: "0px",
                borderRadius: "15px",
            }}>

                <FaStarOfLife style={{
                    display: "flex",
                    marginTop: "25px",
                    marginLeft: "165px",
                    color: "red",
                    width: "5.2px",

                }} />
                <FaStarOfLife style={{
                    marginTop: "72px",
                    marginLeft: "76px",
                    color: "red",
                    width: "5px",

                }} />
                <FaStarOfLife style={{
                    marginTop: "70px",
                    marginLeft: "293px",
                    color: "red",
                    width: "5px",

                }} />
            </Paper>

        </Paper>

    )
}

