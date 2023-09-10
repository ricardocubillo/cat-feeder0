import { StyleSheet } from "react-native";
import { Card, Switch } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function TimeCard({ task, enableTask }) {
  return (
    <Card style={styles.cardView}>
    <Card.Title 
      left={(props) => <Ionicons {...props} name="alarm" size={24} color="black" />}
      title={`${task.time.hours}:${task.time.minutes}`}
    />
    <Card.Content style={styles.switchPosition}>
      <Switch value={task.enable} onValueChange={enableTask} />
    </Card.Content>
  </Card>
  );
}

const styles = StyleSheet.create({
  switchPosition: {
    alignSelf: "flex-end"
  },
  cardView: {
    alignSelf: "center",
    width: 300,
    height: 100
  }
});
