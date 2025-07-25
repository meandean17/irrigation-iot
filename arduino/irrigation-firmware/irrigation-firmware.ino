#include <WiFi.h>
#include <HTTPClient.h>

// home
// #define WIFI_SSID     "Dean.Ori"
// #define WIFI_PASSWORD "0549720692"

// oris parents
#define WIFI_SSID     "ronentiv"
#define WIFI_PASSWORD "RONEN2914"
#define SERVER_URL    "http://192.168.7.17:3000" // <-- Change to your computer's LAN IP

#define SOIL_MOISTURE_PIN 34
#define PUMP_PIN 23

void setup() {
  Serial.begin(115200);
  pinMode(PUMP_PIN, OUTPUT);
  digitalWrite(PUMP_PIN, LOW);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected!");
}

void loop() {
  // 1. Read soil moisture
  int sensorValue = analogRead(SOIL_MOISTURE_PIN);
  int moisturePercent = map(sensorValue, 3300, 1200, 0, 100);
  moisturePercent = constrain(moisturePercent, 0, 100);

  // 2. Send to server
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = String(SERVER_URL) + "/sensor";
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    String payload = "{\"moisture\":" + String(moisturePercent) + "}";
    int httpResponseCode = http.POST(payload);
    Serial.print("POST /sensor response: ");
    Serial.println(httpResponseCode);
    http.end();
  }

  // 3. Get pump state from server
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = String(SERVER_URL) + "/pump";
    http.begin(url);
    int httpResponseCode = http.GET();
    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.print("GET /pump response: ");
      Serial.println(response);
      // Parse response: {"isOn":true}
      if (response.indexOf("true") > 0) {
        digitalWrite(PUMP_PIN, HIGH);
      } else {
        digitalWrite(PUMP_PIN, LOW);
      }
    }
    http.end();
  }

  delay(10000); // Wait 10 seconds before next reading
} 