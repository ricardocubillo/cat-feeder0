#include <HX711.h>
#include <FirebaseESP32.h>
#include <iostream>
#include <string>

#include "food-scale.h"

HX711 food_scale;
FirebaseData option_weight;
FirebaseData food_weight;

void init_food_scale(const int dt, const int sck)
{
    float calibration_factor = 1085.757;

    food_scale.begin(dt, sck);
    food_scale.set_scale(calibration_factor);
    food_scale.tare();
}

int user_sel_weight()
{
    int selected_weight = 0;
    int previous_millis = 0;
    int weight = 0;

    if (Firebase.ready() && (millis() - previous_millis > 1500 || previous_millis == 0))
    {
        previous_millis = millis();
        Firebase.getInt(
            option_weight,
            F("/food-scale/user-sel/hx711/value"),
            &selected_weight);
    }

    switch (selected_weight)
    {
    case 2:
        weight = 60;
        break;
    case 3:
        weight = 104;
        break;
    case 4:
        weight = 119;
        break;
    case 5:
        weight = 129;
        break;
    default:
        break;
    }

    return weight;
}

int read_food_scale()
{
    int read_weight = 0;
    read_weight = (int)food_scale.get_units(10);

    return read_weight;
}

void send_food_weight(int weight)
{
    int previous_millis = 0;

    if (Firebase.ready() && (millis() - previous_millis > 1500 || previous_millis == 0))
    {
        previous_millis = millis();
        Firebase.setInt(
            food_weight,
            F("/food-scale/read/hx711/value"),
            weight);
    }
}