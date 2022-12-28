import React, { useState } from "react";
import TextField from '@mui/material/TextField';

export default function PasswordInput({password, onPasswordChange}) {


    return (

        <TextField
            sx={style}
            id="outlined-password-input"
            label="Contraseña"
            type="password"

            autoComplete="current-password"

            value={password}
            onChange={onPasswordChange}
        />
    )

}
const style = { 
    width: 500,
    background: 'white',
    borderRadius: 2,
}
