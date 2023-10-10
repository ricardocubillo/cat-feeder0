#include <HX711.h>
#include <FirebaseESP32.h>

#include "cat-scale.h"

#define HOLDOFF_TIME 2000

HX711 cat_scale;
FirebaseData cat_weight;

void init_cat_scale(const int dt, const int sck) {
    float calibration_factor = -23.156;

    cat_scale.begin(dt, sck);
    cat_scale.set_scale(calibration_factor);
    cat_scale.tare();
}

int read_cat_scale() {
    int read_weight = 0;
    read_weight = (int)cat_scale.get_units(5);

    if (read_weight < 50) {
        read_weight = 0;
    }

    // Returns the weights in Kg
    return read_weight / 1000;
}

void send_cat_weight(int weight) {
    int prev_millis = 0;

    if (Firebase.ready() && (millis() - prev_millis > 1500 || prev_millis == 0)) {
        prev_millis = millis();
        Firebase.setInt(
            cat_weight,
            F("/cat-scale/read/hx711/value"),
            weight
        );
    }
}
