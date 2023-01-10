
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
            return { ...user, username: event.target.value }
        });
    }

    const onPasswordChange = (event) => {
        setUser(user => {
            return { ...user, password: event.target.value }
        });
    }

    return (
        <Box sx={boxStyle}>
            <Box sx={inputBoxStyle}>
                <UsernameInput username={user.username} onTextChange={onUsernameChange} />
            </Box>
            <Box sx={inputBoxStyle}>
                <PasswordInput password={user.password} onPasswordChange={onPasswordChange} />
            </Box>
            <Box sx={inputBoxStyle}>
                <LoginButton />
            </Box>
        </Box>
    )

}

const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}

const inputBoxStyle = {
    margin: 2,
}


