#include <Arduino.h>
#include <FirebaseESP32.h>

#include "firebase-rdb.h"

#define API_KEY ""
#define RDB_URL ""

FirebaseData rdb;

void setup_rdb() {
    Firebase.begin(RDB_URL, API_KEY);
    Firebase.reconnectWiFi(true);

    rdb.setResponseSize(8192);
}