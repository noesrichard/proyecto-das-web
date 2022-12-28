import { Button } from "@mui/material"
import React from "react"

export default function LoginButton() {

    const handleClick = () => {
        alert("Hola")
    }

    return (
        <Button
            sx={style}
            variant='contained'
            onClick={handleClick}
        >
            Ingresar
        </Button>
    )
}

const style = { 
    width:400,
}
