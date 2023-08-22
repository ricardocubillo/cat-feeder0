#include <Arduino.h>
#include <FirebaseESP32.h>

#include "firebase-rdb.h"

#define API_KEY ""
#define RDB_URL ""

FirebaseData rdb;
FirebaseConfig rdb_config;

void setup_rdb() {
    rdb_config.api_key = API_KEY;
    rdb_config.database_url = RDB_URL;

    Firebase.begin(API_KEY, RDB_URL);
    Firebase.reconnectWiFi(true);

    rdb.setResponseSize(8192);
}