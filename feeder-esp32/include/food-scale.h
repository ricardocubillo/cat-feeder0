#ifndef _FOOD_SCALE_
#define _FOOD_SCALE_

void init_food_scale(const int dt, const int sck);
int user_sel_weight();
int read_food_scale();
void send_food_weight(int weight);

#endif