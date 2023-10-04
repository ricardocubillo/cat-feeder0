import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, ProgressBar } from "react-native-paper";


export default function WaterContainer() {
  const [containerValue, setContainerValue] = useState(0);

  return (
    <Card style={styles.cardView}>
      <Card.Title title="Water container"/>
      <Card.Content>
        <ProgressBar
          style={styles.progressView}
          animatedValue={0.5}
          color={containerValue <= 0.3 ? "#ba1a1a" : "#663399"} 
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
  progressView: {
    height: 20
  }
})
