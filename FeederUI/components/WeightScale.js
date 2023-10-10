import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { getDatabase, onValue, ref } from "firebase/database";

import Firebase from "../firebase-configuration";
import usePreviousValue from "../previousValue";

export default function WeightScale() {
  const [weightScale, setWeightScale] = useState(0);
  const prevWeight = usePreviousValue(weightScale);

  const weightScaleRDB = getDatabase(Firebase);
  const weightScaleRef = ref(weightScaleRDB, "/cat-scale/read/hx711/value");

  useEffect(() => {
    onValue(weightScaleRef, (snapshot) => {
      const getValue = snapshot.val();
      setWeightScale(getValue);
    });
  }, []);

  console.log("Previours weight value", prevWeight);

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Cat's weight" />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.textView}>
          {prevWeight == undefined ? "0": prevWeight}g
        </Text>
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
