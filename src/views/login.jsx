import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AdminLoginForm from "../components/forms/login/admin-login-form";
import BusPicture from '../assets/bus-picture-login.jpg';


export default function Login() {

    return (
        <Box sx={boxStyle}>
            <img src={BusPicture} alt='Hola' width='50%' />
            <Box sx={loginStyle}>
                <Typography variant="h1" gutterBottom sx={{color:'white'}}>
                    BUS-LINK
                </Typography>
                <Typography variant="h2" gutterBottom sx={{color:'white'}}>
                    Bienvenido de vuelta
                </Typography>
                <AdminLoginForm />
            </Box>
        </Box>
    )
}

const boxStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
}

const loginStyle = {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100vh',
    background: '#000080',

}
