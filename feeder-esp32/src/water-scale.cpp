#include <Arduino.h>
#include <HX711.h>
#include <FirebaseESP32.h>

#include "water-scale.h"

HX711 water_scale;
FirebaseData water_weight;

void init_water_scale(const int dt, const int sck) {
    float calibration_factor = 1085.757;

    water_scale.begin(dt, sck);
    water_scale.set_scale(calibration_factor);
    water_scale.tare();
}

int read_water_scale() {
    int read_weight = 0;
    read_weight = (int) water_scale.get_units(10);
    water_scale.power_down();
    delay(500);
    water_scale.power_up();

    return read_weight;
}

void send_water_weight(int weight) {
    int previous_millis = 0;

    if (Firebase.ready() && (millis() - previous_millis > 1500 || previous_millis == 0))
    {
        previous_millis = millis();
        Firebase.setInt(
            water_weight,
            F("/water-container/read/hsrc04/value"),
            weight);
    }
}