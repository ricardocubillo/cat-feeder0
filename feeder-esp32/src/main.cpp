#include <Arduino.h>

#include "wifi-configuration.h"
#include "firebase-rdb.h"
#include "food-container.h"

const int HSRC04_TRIG = 18;
const int HSRC04_ECHO = 19;

void setup() {
  // put your setup code here, to run once:
  pinMode(HSRC04_ECHO, INPUT);

  pinMode(HSRC04_TRIG, OUTPUT);

  setup_wifi();
  setup_rdb();

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int obj_distance = 0;
  obj_distance = get_obj_distance(HSRC04_TRIG, HSRC04_ECHO);
  send_obj_distance(obj_distance);

}