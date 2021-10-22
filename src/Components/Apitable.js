
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(parameters, type, description) {
    return { parameters, type, description };
}

const rows = [
    createData('url', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('short url', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('shorturl', 'string', 'unique url for shortening'),
    createData('short url', 'string', 'unique url for shortening'),
];

export default function BasicTable() {
    return (
        <TableContainer >
            <Paper style={{
                width: "1200px",
                height: "auto",
                marginLeft: "17px",
                borderRadius: "15px 15px 15px 15px",
                marginTop: "60px",
            }}>
                <Table  >
                    <TableHead >
                        <TableRow>
                            <TableCell style={{
                                backgroundColor: "#00205C",
                                color: "white",
                                fontSize: "13px",
                                borderRadius: "25px 0px 0px 25px",
                            }}>parameters</TableCell>
                            <TableCell align="right" style={{
                                backgroundColor: "#00205C",
                                color: "white",
                                fontSize: "13px",
                            }}>Type</TableCell>
                            <TableCell align="right" style={{
                                color: "white",
                                backgroundColor: "#00205C",
                                fontSize: "13px",
                                borderRadius: "0px 25px 25px 0px",
                            }}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow

                                key={row.parameters}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.parameters}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </TableContainer>
    );
}




