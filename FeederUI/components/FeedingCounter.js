import { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { getDatabase, onValue, ref } from "firebase/database";

import Firebase from "../firebase-configuration";
import usePreviousValue from "../previousValue";

export default function FeedingCounter() {
  const [weightScale, setWeightScale] = useState(0);
  const [count, setCount] = useState(0);
  const prevWeight = usePreviousValue(weightScale);

  const feedingCountRDB = getDatabase(Firebase);
  const feedingCountRef = ref(feedingCountRDB, "/cat-scale/read/hx711/value");

  useEffect(() => {
    onValue(feedingCountRef, (snapshot) => {
      const getValue = snapshot.val();
      setWeightScale(getValue);
    });
  }, []);


  useEffect(() => {
    if (weightScale != 0 &&
      prevWeight != weightScale &&
      prevWeight != undefined
    ) 
    {
      setCount(count + 1);
    }
  })

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Feeding counter" />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.textView}>{count}</Text>
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
