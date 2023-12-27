import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import { Breadcrumbs, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

const UserAdd = () => {
 

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Admin
        </Link>
        <Typography color="text.primary">Use Add</Typography>
      </Breadcrumbs>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 2 }}>
          
          <Button component={Link}
          to="/admin/user-list" variant="contained" color="primary" style={{ marginRight: 10, marginLeft: 10 }}>
            <TurnLeftIcon />
          </Button>
        </Box>
        
      </Box>
      <Grid item container>
        {/* Card - 1 */}
        <Grid xs={12} md={12}>
        <Card>
         
            <CardContent>
              <div style={{display:'flex'}}>
                <Grid xs={6} md={6} margin={1}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                
                <Grid xs={6} md={6} margin={1}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
              </div>

              <div style={{display:'flex'}}>
                <Grid xs={6} md={6} margin={1}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                
                <Grid xs={6} md={6} margin={1}>
                        <TextField id="outlined-basic" label="Mobile" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
              </div>

              <div style={{display:'flex'}}>
                <Grid xs={6} md={6} margin={1}>
                        <TextField type="number" id="outlined-basic" label="Age" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                
                <Grid xs={6} md={6} margin={1}>
                        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
              </div>
                <Grid xs={12} md={12} margin={1}>
                    <center>
                    <Button variant="contained" color="primary">
                         Submit
                    </Button>
                    </center>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
    </>
  );
};

export default UserAdd;
