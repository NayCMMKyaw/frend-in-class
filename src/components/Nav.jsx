import { AppBar, Typography, Toolbar, Button} from "@mui/material";


export default function Nav(){
    return (
        <AppBar position="static" style={{backgroundColor:"#20232a"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    My Website
                </Typography>

                <Button color="inherit">HOME</Button>
                <Button color="inherit">ABOUT</Button>
                <Button color="inherit">CONTACT</Button>
            </Toolbar>
        </AppBar>
    );
}