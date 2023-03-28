import { ImageList, ImageListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Rightbar(){
    return (
        <Box flexDirection={"column"}>
            <Typography variant='h6'>
                Latest Photos
            </Typography>
            <ImageList sx={{width: 250}} cols={2}>
                <ImageListItem >
                    <img 
                        src='./assets/frass.jpg'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img 
                        src='./assets/frass.jpg'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img 
                        src='./assets/frass.jpg'
                        alt=''
                    />
                </ImageListItem>
                <ImageListItem>
                    <img 
                        src='./assets/frass.jpg'
                        alt=''
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    );
}