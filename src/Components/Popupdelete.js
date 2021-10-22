import React from 'react'
import { Paper, H6, Button } from "qdm-component-library";
import Trashcan from './Trashcan.png'
export default function Popupdelete() {
    return (
        <div>
            <Paper style={{
                height: "350px",
                width: "300px",
                marginTop: "150px",
                marginLeft: "530px",
                borderRadius: "15px",
            }}>


                <img src={Trashcan} alt="Trashcan.png" style={{ marginTop: "25px", marginLeft: "120px" }} />

                <H6
                    name="Are you Sure ?"
                    style={{
                        fontSize: "30px",
                        fontWeight: "500",
                        width: "200px",
                        marginLeft: "50px",
                        marginTop: "30px",
                    }}

                />
                <H6
                    name="Do you really want to delete this Record?"
                    style={{
                        fontSize: "12px",
                        width: "256px",
                        marginLeft: "40px",
                        marginTop: "20px",
                        fontfamily: "Lato",

                    }}
                    id={"signIn-H6-Sign-in-registered"}
                />
                <Paper direction="row" style={{
                    fontSize: "12px",
                    width: "256px",
                    height: "40px",
                    marginLeft: "20px",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    marginTop: "40px",

                }} >
                    <Button variant="contained" color="white" style={{
                        fontSize: "14px",
                        backgroundColor: "#C4C4C4",
                        width: "100px",
                        borderRadius: "10px",
                        borderColor: "#C4C4C4",
                        marginLeft: "10px",
                    }}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="white" style={{
                        backgroundColor: "#FF1414",
                        fontSize: "14px",
                        width: "100px",
                        borderRadius: "10px",
                        borderColor: "#FF1414",
                        marginLeft: "40px",
                    }}>
                        Delete
                    </Button>
                </Paper>
            </Paper>
        </div>
    )
}
