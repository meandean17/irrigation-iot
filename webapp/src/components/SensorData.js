import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';

const SERVER_URL = "http://192.168.7.17:3000"; // Use your server's LAN IP

const SensorData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSensor = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${SERVER_URL}/sensor`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setData(null);
      }
      setLoading(false);
    };
    fetchSensor();
    const interval = setInterval(fetchSensor, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <OpacityIcon /> Soil Moisture
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : data && data.value !== undefined ? (
          <Box>
            <Typography variant="h3">{data.value}%</Typography>
            <Typography color="textSecondary">
              Last updated: {data.timestamp ? new Date(data.timestamp).toLocaleString() : "N/A"}
            </Typography>
          </Box>
        ) : (
          <Typography>No data</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SensorData; 