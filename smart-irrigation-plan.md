# Smart Irrigation System - Development Plan

## Phase 1: Setup & Testing Components
- [x] Test LOLIN D32 board functionality
- [x] Test soil moisture sensors calibration and readings (value in air = 3300, value in water = 1200)
- [ ] Test MOSFET switching with the water pump
- [ ] Verify power supply for both microcontroller and pump

## Phase 2: Basic Circuit Assembly
- [ ] Create breadboard circuit connecting D32 to soil moisture sensors
- [ ] Set up pump control circuit with MOSFET
- [ ] Implement safe power distribution (12V for pump, 3.3V for logic)
- [ ] Test water flow through tubing

## Phase 3: Core Software Development
- [ ] Develop code to read moisture sensor values
- [ ] Implement basic threshold-based watering logic
- [ ] Create simple timed watering schedule
- [ ] Add basic data logging to serial monitor

## Phase 4: WiFi & Cloud Integration
- [ ] Connect D32 to WiFi network
- [ ] Set up cloud service (Firebase or MQTT)
- [ ] Implement data upload to cloud
- [ ] Create basic web dashboard for monitoring

## Phase 5: Smart Features Implementation
- [ ] Integrate weather API
- [ ] Implement rain prediction skip logic
- [ ] Develop custom watering profiles
- [ ] Add offline mode with data buffering

## Phase 6: Testing & Optimization
- [ ] Conduct system stress testing
- [ ] Optimize power consumption
- [ ] Fine-tune moisture thresholds and watering durations
- [ ] Address any reliability issues

## Phase 7: Final Assembly & Documentation
- [ ] Create final wiring/circuit diagram
- [ ] Document code thoroughly
- [ ] Create user manual for operation and maintenance
- [ ] Prepare project presentation for course

## Progress Tracking Table

| Task | Planned Start | Actual Start | Planned Completion | Actual Completion | Status | Notes |
|------|--------------|-------------|-------------------|------------------|--------|-------|
| | | | | | | |

## Component Inventory
- LOLIN D32 (ESP32-based board)
- 2× Capacitive soil moisture sensors v2.0
- 12V YW fluid mini pump (YW01-DC12-B-S25, 3W power)
- MOSFET
- 12V power adapter
- Breadboard
- Plastic tubing (approx. 1m)
- Wires

## Project Goals
This smart irrigation system aims to optimize water usage through:
1. Soil moisture monitoring
2. AI-based watering prediction
3. Weather API integration
4. Cloud-based monitoring & remote configuration
5. Smart watering schedules
6. Offline mode with smart syncing
