#include <Arduino.h>
#include <WiFi.h>

#include "wifi-configuration.h"

#define WIFI_SSID  ""
#define WIFI_PASS   ""

void setup_wifi() 
{
    WiFi.begin(WIFI_SSID, WIFI_PASS);

    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(100);
    }

    Serial.print("Connected with Ip: ");
    Serial.print(WiFi.localIP());
}