import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, ProgressBar } from "react-native-paper";
import { getDatabase, onValue, ref } from "firebase/database";

import Firebase from "../firebase-configuration";


export default function WaterContainer() {
  const [waterContainer, setWaterContainer] = useState(0);

  const waterContainerRDB = getDatabase(Firebase);
  const waterContainerRef = ref(waterContainerRDB, "/water-container/read/hsrc04/value");

  useEffect(() => {
    onValue(waterContainerRef, (snapshot) => {
      const getWaterContainerValue = snapshot.val();
      setWaterContainer(getWaterContainerValue.toFixed(2) / 100);
    });
  }, []);

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Water container"/>
      <Card.Content style={styles.cardContent}>
        <ProgressBar
          style={styles.progressView}
          animatedValue={waterContainer}
          color={waterContainer <= 0.3 ? "#ba1a1a" : "#663399"} 
        />
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
  progressView: {
    height: 20
  }
})
