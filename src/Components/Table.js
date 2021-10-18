import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import backgroundImage from './f1.png'
import Anqlogo from './anqlogo.svg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container, Row, Col, Div, BackgroundImage, Paper, H6, TextInput, } from "qdm-component-library";
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/material/styles';


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '14px',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 50,
        width: '100%',
        backgroundColor: '#00205C',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(12.5),
        marginTop: theme.spacing(-8),
        marginLeft: theme.spacing(15),
        // color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#000000',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',

        },
    }),
);

const CustomButtonRoot = styled('span')(`
  background-color: #00205C;
  padding: 6px 25px;
  border-radius: 25px;
  margin-left: 1140px;
  margin-bottom: -400px;
  color: #fff;
  font-weight: 600;
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1.5),
    },
    '& .MuiInputBase-input': {
        borderRadius: 25,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 12,
        height: 6,
        width: 160,
        marginLeft: 950,
        marginBottom: 3,
        padding: '10px 12px',

        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
}));


const columns = [
    { field: 'id', headerName: 'S.No ', width: 110 },
    { field: 'firstName', headerName: 'Long URL', width: 170 },
    { field: 'lastName', headerName: 'Short URL', width: 170 },
    { field: 'age', headerName: 'Client Key', type: 'string', width: 150, },
    { field: 'project', headerName: 'Project ID', sortable: false, width: 160, },
    { field: 'Validity', headerName: 'Validity', width: 170 },

];

const rows = [
    { id: 1, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 363453, project: 'gfsjhsj', Validity: '2days' },
    { id: 2, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 425332, project: 'gfsjhsj', Validity: '3days' },
    { id: 3, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 4553635, project: 'gfsjhsj', Validity: '6days' },
    { id: 4, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 1635432, project: 'gfsjhsj', Validity: '2days' },
    { id: 5, lastName: 'http://ertgfgere4n', firstName: 'http://jsdfygsisdhksdvsk.....', age: 1635432, project: 'gfsjhsj', Validity: '2days' },
    { id: 6, lastName: 'http://ertgfgere4n', firstName: 'http://jsdfygsisdhksdvsk.....', age: 1635432, project: 'gfsjhsj', Validity: '2days' },
    { id: 7, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 4435435, project: 'gfsjhsj', Validity: '4days' },
    { id: 8, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 3678766, project: 'gfsjhsj', Validity: '4days' },
    { id: 9, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 653234, project: 'gfsjhsj', Validity: '2days' },
    { id: 10, lastName: 'http://ertgfgere4n', firstName: 'http://jsdfygsisdhksdvsk.....', age: 1635432, project: 'gfsjhsj', Validity: '2days' },
    { id: 11, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 4435435, project: 'gfsjhsj', Validity: '4days' },
    { id: 12, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 3678766, project: 'gfsjhsj', Validity: '4days' },
    { id: 13, lastName: 'http://ertgfgere4', firstName: 'http://jsdfygsisdhksdvsk.....', age: 653234, project: 'gfsjhsj', Validity: '2days' },
];

export default function DataTable() {
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
                    height: "510px",
                    width: "1250px",
                    marginTop: "110px",
                    borderRadius: "20px",

                }}>
                    <Box>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                            </InputLabel>
                            <BootstrapInput placeholder="Search" id="bootstrap-input" />
                            <CustomButton style={{
                                marginTop: "-32px",
                                borderRadius: "20px",
                            }}>+Add</CustomButton>
                        </FormControl> </Box>

                    <div style={{ height: 440, width: '95%', marginTop: '22px', marginLeft: '30px', borderRadius: '30px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            style={{ borderRadius: '20px', borderColor: '#CECECE' }}
                        />
                    </div>
                </Paper>
                <Paper style={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    height: "120px",
                    width: "1257px",
                    marginTop: "-510px",
                    marginLeft: "-1260px",
                }}>
                    <img src={Anqlogo} alt="anqlogo.svg" style={{ marginTop: "10px", marginLeft: "-3px" }} />

                    <Box sx={{ width: '20%', marginLeft: '-10px', }}>
                        <Box >
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                aria-label="styled tabs example">
                                <StyledTab label="Dashboard" />
                                <StyledTab label="Leader Board" />
                            </StyledTabs>
                        </Box>
                    </Box>
                    <Paper style={{
                        background: "white",
                        height: "55px",
                        width: "200px",
                        marginLeft: "1050px",
                        borderRadius: "10px",
                        marginTop: "-100px",
                    }}>
                        <Stack direction="row" spacing={2} >
                            <Avatar sx={{ width: 45, height: 45, marginLeft: "4.5px", marginTop: "4.5px" }} variant="rounded" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Stack>
                        <Stack sx={{ marginLeft: "60px", marginTop: "-40px" }}>Sathish Rakin</Stack>
                    </Paper>
                </Paper>
            </BackgroundImage>
        </div>
    );
}


