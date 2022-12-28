import TextField from '@mui/material/TextField';
import React from "react";

export default function UsernameInput({username, onTextChange}) {


    return (
        <TextField
            sx={style}
            id="outlined-name"
            label="Usuario"
            value={username}
            onChange={onTextChange}
        />
    )
}

const style = { 
    width: 500,
    background: 'white',
    borderRadius: 2,
}
