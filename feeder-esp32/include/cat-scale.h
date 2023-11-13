#ifndef _CAT_SCALE_
#define _CAT_SCALE_

void init_cat_scale(const int dt, const int sck);
int read_cat_weight();
void send_cat_weight(int weight);

#endif