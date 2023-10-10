import { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { getDatabase, onValue, ref } from "firebase/database";

import Firebase from "../firebase-configuration";

export default function FeedingCounter() {
  const [feedingCounter, setFeedingCounter] = useState(0);

  const feedingCounterRDB = getDatabase(Firebase);
  const feedingCounterRef = ref(feedingCounterRDB, "/feeding-counter/read/hx711/value");

  useEffect(() => {
    onValue(feedingCounterRef, (snapshot) => {
      const getFeedingCounterValue = snapshot.val();
      setFeedingCounter(getFeedingCounterValue);
    });
  }, []);

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Feeding counter" />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.textView}>{feedingCounter}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardView: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    height: 200
  },
  cardContent: {
    marginTop: 40
  },
  textView: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold"
  }
})
