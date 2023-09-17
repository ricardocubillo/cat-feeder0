#include <Arduino.h>
#include <FirebaseESP32.h>

FirebaseData motor_state;
FirebaseData automatic_feeding;
FirebaseData manual_feeding;

bool alarm() {
    bool alarm_state = false;
    int prev_millis = 0;

    if (Firebase.ready() && (millis() - prev_millis > 1500 || prev_millis == 0)) {
        prev_millis = millis();
        Firebase.getBool(
            automatic_feeding, 
            F("/feeder/automatic-feeding/component/motor/dc/value"),
            &alarm_state);
    }

    return alarm_state;
}

bool manual() {
    bool manual_feeding_state = false;
    int prev_millis = 0;

    if (Firebase.ready() && (millis() - prev_millis > 1500 || prev_millis == 0)) {
        prev_millis = millis();
        Firebase.getBool(
            manual_feeding, 
            F("/feeder/manual-feeding/component/motor/dc/value"),
            &manual_feeding_state);
    }

    return manual_feeding_state;
}

void send_motor_state(bool state) {
    int prev_millis = 0;

    if (Firebase.ready() && (millis() - prev_millis > 1500 || prev_millis == 0)) {
        prev_millis = millis();
        Firebase.setBool(
            motor_state,
            F("/feeder/feeding-state/component/motor/dc/value"),
            state
        );
    }
}

void turn_on_motor(const int pin_motor[3], int pwm_speed) {
    digitalWrite(pin_motor[1], HIGH);
    digitalWrite(pin_motor[2], LOW);
    delay(50);
    digitalWrite(pin_motor[1], LOW);
    digitalWrite(pin_motor[2], HIGH);
    
    analogWrite(pin_motor[0], pwm_speed);
    send_motor_state(true);
}

void turn_off_motor(const int pin_motor[3]) {
    digitalWrite(pin_motor[1], LOW);
    digitalWrite(pin_motor[2], LOW);
    delay(100);

    analogWrite(pin_motor[0], 0);
    send_motor_state(false);
}