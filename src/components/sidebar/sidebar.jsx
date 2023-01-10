import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Divider, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import UpdateIcon from '@mui/icons-material/Update';

const Sidebar = () => {
    let navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState();

    const handleClick = (path, index) => (event) => {
        setSelectedIndex(index);
        navigate(path);
    };

    const drawerWidth = 340;
    var sections = [
        {label: "Inicio", icon: <HomeIcon />, link: "/home"},
        {label: "Usuarios", icon: <PersonIcon />, link: "/home/user"},
        {label: "Cooperativas", icon: <DirectionsBusIcon />, link: "/home/coops"},
        {label: "Frecuencias", icon: <UpdateIcon />, link: "/home/frequencies"},
    ];
    return (
        <Drawer variant="permanent" anchor="left" sx={{ width: drawerWidth }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center", width: 220 }}>
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    BUS-LINK
                </Typography>
            </Toolbar>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "space-between", flexDirection: "column", }}>
                <Box sx={{ overflow: "auto", width: 220 }}>
                    <List>
                        {sections.map((section, index) => (
                            <ListItem key={section.label} disablePadding>
                                <ListItemButton
                                    sx={{
                                        "&.Mui-selected": { backgroundColor: "#dfdfdf" },
                                        "&.Mui-focusVisible": {},
                                        ":hover": {},
                                    }}
                                    selected={index == selectedIndex}
                                    onClick={handleClick(section.link, index)}
                                >
                                    <ListItemIcon>{section.icon}</ListItemIcon>
                                    <ListItemText primary={section.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Button color="error" onClick={() => navigate("/")}>Cerrar Sesión</Button>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
