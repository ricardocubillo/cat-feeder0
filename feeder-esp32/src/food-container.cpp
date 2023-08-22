#include <Arduino.h>

#include "food-container.h"

int get_obj_distance(const int trig_pin, const int echo_pin) {
    long pulse_duration = 0;
    int obj_distance = 0;

    digitalWrite(trig_pin, LOW);
    delay(2);
    digitalWrite(trig_pin, HIGH);
    delay(10);
    digitalWrite(trig_pin, LOW);

    pulse_duration = pulseIn(echo_pin, HIGH);

    return obj_distance = pulse_duration / 29 / 2;
}

void send_obj_distance(int obj_distance) {
    
}