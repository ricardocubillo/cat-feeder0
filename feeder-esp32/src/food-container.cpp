#include <Arduino.h>
#include <FirebaseESP32.h>

#include "food-container.h"

FirebaseData hsrc04_value;

int get_obj_distance(const int trig_pin, const int echo_pin)
{
    long pulse_duration = 0;
    int obj_distance = 0;

    digitalWrite(trig_pin, LOW);
    delay(2);
    digitalWrite(trig_pin, HIGH);
    delay(10);
    digitalWrite(trig_pin, LOW);

    pulse_duration = pulseIn(echo_pin, HIGH);
    obj_distance = pulse_duration / 29 / 2;
    obj_distance = 20 - obj_distance;

    if (obj_distance >= 20) {
        obj_distance = 0;
    }
    else if (obj_distance <= 3) {
        obj_distance = 20;
    }

    return map(obj_distance, 0, 20, 0, 100);
}

void send_obj_distance(int obj_distance)
{
    int previous_millis = 0;

    if (Firebase.ready() && (millis() - previous_millis > 1500 || previous_millis == 0))
    {
        previous_millis = millis();

        Firebase.setInt(
            hsrc04_value, 
            F("/food_container/component/hsrc04/value"), 
            obj_distance);
    }
}