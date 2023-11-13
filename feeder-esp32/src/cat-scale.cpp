#include <HX711.h>
#include <FirebaseESP32.h>

#include "cat-scale.h"

HX711 cat_scale;
FirebaseData cat_weight;

const float OFFSET = 50682624;

void init_cat_scale(const int dt, const int sck)
{
    float calibration_factor = -23.156;

    cat_scale.begin(dt, sck);
    cat_scale.set_scale(calibration_factor);
    cat_scale.set_offset(OFFSET);
    cat_scale.tare();
}

int read_cat_weight()
{
    int get_weight = 0;

    if (cat_scale.wait_ready_timeout(1000))
    {
        get_weight = (int)cat_scale.get_units(10);
        cat_scale.power_down();
        delay(500);
        cat_scale.power_up();
    }

    if (get_weight < 50)
    {
        get_weight = 0;
    }

    // Returns weight value in Kg
    return get_weight / 1000;
}

void send_cat_weight(int weight)
{
    int previous_millis = 0;

    if (Firebase.ready() && (millis() - previous_millis > 1500 || previous_millis == 0))
    {
        previous_millis = millis();

        Firebase.setInt(
            cat_weight,
            F("/cat-scale/read/hx711/value"),
            weight);
    }
}