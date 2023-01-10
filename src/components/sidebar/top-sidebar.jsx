import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function UserSidebarButton() {

    return (
        <Toolbar sx={{ display: "flex", justifyContent: "center", width: 220 }}>
            <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                BUS-LINK
            </Typography>
        </Toolbar>
    )
}
