
import { Box } from "@mui/material";
import React, { useState } from "react";
import LoginButton from "../../buttons/login-button";
import PasswordInput from "../../inputs/password-input";
import UsernameInput from "../../inputs/username-input";

export default function AdminLoginForm() {

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const onUsernameChange = (event) => { 
        setUser(user => {
            return {...user, username: event.target.value}
        });
    }

    const onPasswordChange = (event) => { 
        setUser(user => {
            return {...user, password: event.target.value}
        });
    } 

    return (
        <Box sx={boxStyle}>
            <UsernameInput username={user.username} onTextChange={onUsernameChange}/>
            <PasswordInput password={user.password} onPasswordChange={onPasswordChange}/>
            <LoginButton />
        </Box>
    )

}

const boxStyle = { 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
}


