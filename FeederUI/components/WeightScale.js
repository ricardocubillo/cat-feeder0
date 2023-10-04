import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { getDatabase, onValue, ref } from "firebase/database";

import Firebase from "../firebase-configuration";

export default function WeightScale() {
  const [weightScale, setWeightScale] = useState(0);

  const weightScaleRDB = getDatabase(Firebase);
  const weightScaleRef = ref(weightScaleRDB, "/cat-scale/read/hx711/value");

  useEffect(() => {
    onValue(weightScaleRef, (snapshot) => {
      const getValue = snapshot.val();
      setWeightScale(getValue);
    });
  }, []);

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Cat's weight" />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.textView}>{weightScale}g</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardView: {
    alignSelf: "center",
    marginTop: 10,
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
