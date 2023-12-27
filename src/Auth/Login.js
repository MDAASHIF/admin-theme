import { Grid,TextField,Button } from "@mui/material";
import React from "react";
import mainPageImage from "../images/main.jpg";
import Logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom'; 

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/Dashboard');
      };
  return (
    <div >
      <Grid item container>
        <Grid xs={12} md={6}>
           <img src={mainPageImage} alt="mainPageImage" width="100%" height="100%"/>
        </Grid>
        <Grid xs={12} md={6}>
             <div style={{margin:0, backgroundColor:'#A3E4D7',height:"100vh"}}>
                <div style={{alignItems:"center", justifyContent:'center',display:'flex', paddingTop:"80px"}}>
                <img src={Logo}  height={100}/>
                </div>
                <div style={{textAlign:"center", justifyContent:'center'}}>
                  <center>
                    <div style={{width:350}}>
                        <h1 style={{marginBottom:50}}>Login to start session</h1>
                        <TextField fullWidth  id="fullWidth" label="Email" variant="outlined" width="300px" style={{marginBottom:20}}/>
                        <TextField type="password" fullWidth  id="fullWidth" label="Password" variant="outlined" width="300px" style={{marginBottom:20}} />
                        <Button  onClick={handleLogin} fullWidth variant="contained">Login</Button>
                    </div>
                  </center>
                </div>
             </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
