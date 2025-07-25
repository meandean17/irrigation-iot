import React from 'react';
import { Grid } from '@mui/material';
import SensorData from '../components/SensorData';
import PumpControl from '../components/PumpControl';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <SensorData />
      </Grid>
      <Grid item xs={12} md={6}>
        <PumpControl />
      </Grid>
    </Grid>
  );
};

export default Dashboard; 