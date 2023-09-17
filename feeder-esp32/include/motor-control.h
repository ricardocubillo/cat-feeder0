#ifndef _MOTOR_CONTROL_
#define _MOTOR_CONTROL_

bool alarm();
bool manual();
void send_motor_state(bool state);
void turn_on_motor(const int pin[3], int pwm_speed);
void turn_off_motor(const int pin_motor[3]);

#endif