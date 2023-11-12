#ifndef _WATER_SCALE_
#define _WATER_SCALE_

void init_water_scale(const int dt, const int sck);
int read_water_scale();
void send_water_weight(int weight);

#endif