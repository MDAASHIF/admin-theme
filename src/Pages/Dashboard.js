// src/Components/Dashboard/Dashboard.js
import React from 'react';
import usePageTitle from '../Components/usePageTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  usePageTitle('Dashboard')

  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Admin
      </Link>
      {/* <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link> */}
      <Typography color="text.primary">Dashboard</Typography>
    </Breadcrumbs>
      <div style={{display:'flex'}}>
      <Grid item container>
        {/* Card - 1 */}
        <Grid xs={4} md={4}>
        <Card sx={{ backgroundColor: '#A52A2A', margin:1 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        {/* Card - 2 */}
        <Grid xs={4} md={4}>
          <Card sx={{ backgroundColor: 'SeaGreen', margin:1 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
        {/* Card - 3 */}
        <Grid xs={4} md={4}>
          <Card sx={{ backgroundColor: 'SteelBlue', margin:1 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
    {/* Chart Conatiner */}
    <div style={{display:'flex'}}>
    <Grid item container>
      {/* Bar Chart */}
      <Grid xs={6} md={6}>
        <Card sx={{ margin:1, backgroundColor:'LightCyan' }}>
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
          />
        </Card>
      </Grid>
      {/* pie Chart */}
      <Grid xs={6} md={6}>
      <Card sx={{ margin:1,padding:5, backgroundColor:'LightCyan' }}>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          width={450}
          height={220}
        />
      </Card>
      </Grid>
      </Grid>
    </div>
    </>
  );
};

export default Dashboard;
