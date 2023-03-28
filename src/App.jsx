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
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6}>
            <Content />
          </Grid>
          <Grid item xs={3}>
            <Rightbar />
          </Grid>
          
        </Grid>
        
      </Container>
      
    </div>
  );
}

export default App;
