import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function FeedingCounter() {
  return (
    <Card style={styles.cardView}>
      <Card.Title title="Feeding counter" />
      <Card.Content>
        <Text style={styles.textView}> 0 </Text>
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
  textView: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold"
  }
})
