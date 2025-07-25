const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Store the latest sensor reading and pump state in memory
let latestMoisture = null;
let pumpState = false;

app.use(bodyParser.json());
app.use(cors());

// Endpoint for Arduino to POST sensor data
app.post('/sensor', (req, res) => {
  latestMoisture = {
    value: req.body.moisture,
    timestamp: new Date().toISOString()
  };
  console.log('Received moisture:', latestMoisture);
  res.sendStatus(200);
});

// Endpoint for web app to GET latest sensor data
app.get('/sensor', (req, res) => {
  res.json(latestMoisture || {});
});

// Endpoint for web app to set pump state
app.post('/pump', (req, res) => {
  pumpState = !!req.body.isOn;
  console.log('Pump state set to:', pumpState);
  res.sendStatus(200);
});

// Endpoint for Arduino to GET pump state
app.get('/pump', (req, res) => {
  res.json({ isOn: pumpState });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
