#include <Arduino.h>

#include "wifi-configuration.h"
#include "firebase-rdb.h"
#include "food-container.h"
#include "food-scale.h"
#include "cat-scale.h"
#include "motor-control.h"

const int HSRC04_TRIG = 18;
const int HSRC04_ECHO = 19;
const int ENA = 27;
const int IN1 = 32;
const int IN2 = 33;
const int HX711_DT = 16;
const int HX711_SCK = 4;
const int HX711_DT_CAT = 26;
const int HX711_SCK_CAT = 25;
const int MOTOR_PINS [3] = {ENA, IN1, IN2};

int obj_distance = 0;
int food_scale_weight = 0;
int selected_cat_weight = 0;
int cat_scale_weight = 0;
int pwm_speed = 200;
bool alarm_state = false;
bool manual_state = false;

void setup() {
  // put your setup code here, to run once:
  pinMode(HSRC04_ECHO, INPUT);

  pinMode(HSRC04_TRIG, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);

  setup_wifi();
  setup_rdb();
  init_food_scale(HX711_DT, HX711_SCK);
  init_cat_scale(HX711_DT_CAT, HX711_SCK_CAT);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  obj_distance = get_obj_distance(HSRC04_TRIG, HSRC04_ECHO);
  send_obj_distance(obj_distance);

  food_scale_weight = read_food_scale();
  send_food_weight(food_scale_weight);
  selected_cat_weight = user_sel_weight();

  cat_scale_weight = read_cat_scale();
  send_cat_weight(cat_scale_weight);
  Serial.println(cat_scale_weight);

  alarm_state = alarm();
  manual_state = manual();

  if (alarm_state == HIGH && food_scale_weight <= selected_cat_weight) {
    turn_on_motor(MOTOR_PINS, pwm_speed);
  } 
  else if (manual_state == HIGH && food_scale_weight <= selected_cat_weight) {
    turn_on_motor(MOTOR_PINS, pwm_speed);
  }
  else {
    turn_off_motor(MOTOR_PINS);
  }
}