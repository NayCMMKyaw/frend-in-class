import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import {Grid, Container} from '@mui/material';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={3} sx={{ display: {xs:"none", md: "block"}, mt: 3 }}>
            <Sidebar />
          </Grid>
          <Grid item md={6} xs={12} sx={{justifyContent:"center", alignItems:"center", mt: 5 }}>
            <Content />
          </Grid>
          <Grid item md={3} sx={{ display: {xs:"none", md: "block"}, mt: 5 }}>
            <Rightbar />
          </Grid>
          
        </Grid>
        
      </Container>
      
    </div>
  );
}

export default App;
