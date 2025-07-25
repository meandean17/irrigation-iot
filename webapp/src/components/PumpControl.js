import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PowerOffIcon from '@mui/icons-material/PowerOff';

const SERVER_URL = "http://192.168.7.17:3000"; // Use your server's LAN IP

const PumpControl = () => {
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPump = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${SERVER_URL}/pump`);
      const json = await res.json();
      setIsOn(!!json.isOn);
    } catch (err) {
      // handle error
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPump();
    const interval = setInterval(fetchPump, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  const setPump = async (state) => {
    setLoading(true);
    try {
      await fetch(`${SERVER_URL}/pump`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOn: state }),
      });
      setIsOn(state);
    } catch (err) {
      // handle error
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Pump Control
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box>
            <Typography variant="h3" color={isOn ? "primary" : "textSecondary"}>
              {isOn ? <PowerSettingsNewIcon /> : <PowerOffIcon />}
              {isOn ? "ON" : "OFF"}
            </Typography>
            <Button
              variant="contained"
              color={isOn ? "secondary" : "primary"}
              onClick={() => setPump(!isOn)}
              style={{ marginTop: 16 }}
            >
              {isOn ? "Turn Off" : "Turn On"}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PumpControl; 