import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export default function WeightScale() {
  return (
    <Card style={styles.cardView}>
      <Card.Title title="Cat's weight" />
      <Card.Content>
        <Text style={styles.textView}>3 Kg</Text>
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
  textView: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold"
  }
})
