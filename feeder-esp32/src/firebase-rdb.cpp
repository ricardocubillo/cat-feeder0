#include <Arduino.h>
#include <FirebaseESP32.h>
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

#include "firebase-rdb.h"

#define API_KEY  ""
#define RDB_URL  ""

FirebaseData rdb;
FirebaseConfig config;
FirebaseAuth auth;

void setup_rdb() {
    config.api_key = API_KEY;
    config.database_url = RDB_URL;
    config.signer.test_mode = true;

    rdb.setBSSLBufferSize(4096, 1024);

    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);
}