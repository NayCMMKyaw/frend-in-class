import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function Content(){
    return (
        <Grid>
        <Box component="main" >
            <Typography variant="h4">
                Welcome to My Website
            </Typography>
            <Typography variant="body1" sx={{ mt: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             <br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat duis. Sed sed risus pretium quam vulputate. Massa tincidunt dui ut ornare lectus sit amet. Varius sit amet mattis vulputate enim. 
            </Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={2} sx={{mt: 1}}>
            <Grid item xs={12} md={6}>
            <Card >
                <CardMedia
                    component="img"
                    sx={{height: 140}}
                    image ="./assets/frass.jpg"
                    alt="" 
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Card >
                <CardMedia
                    component="img"
                    sx={{height: 140}}
                    image ="./assets/frass.jpg"
                    alt="" 
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
                <CardMedia
                    component="img"
                    sx={{height: 140}}
                    image ="./assets/frass.jpg"
                    alt="" 
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        </Grid>
    );
}