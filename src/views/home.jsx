import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {

    return (
        <Box>
            <Sidebar />
            <Box>
                <Outlet />
            </Box>
        </Box>

    )
}
