import { Menu } from "@mui/icons-material";
import { Box, AppBar, Typography, Toolbar, Button, IconButton} from "@mui/material";



export default function Nav(){
    return (
        <AppBar position="static" style={{backgroundColor:"#20232a"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    My Website
                </Typography>
                
                    <IconButton
                        color="inherit"
                        sx={{ display: { md:"none"},}}
                    >
                        < Menu />
                    </IconButton>
                    <Box 
                    sx={{
                        display: { xs: "none", md: "block"},
                    }}
                >
                    <Button color="inherit">HOME</Button>
                    <Button color="inherit">ABOUT</Button>
                    <Button color="inherit">CONTACT</Button>
                </Box>
                
            </Toolbar>
        </AppBar>
    );
}