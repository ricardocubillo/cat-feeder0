import { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Switch, List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function TimeCard({ time }) {
  const [switchOn, setSwitchOn] = useState(false);

  const onValueChange = () => {
    setSwitchOn(!switchOn);
  }

  return (
    <Card style={styles.cardView}>
    <Card.Title 
      left={(props) => <Ionicons {...props} name="alarm" size={24} color="black" />}
      title={time}
    />
    <Card.Content style={styles.switchPosition}>
      <Switch value={switchOn} onValueChange={onValueChange} />
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
    width: 300
  }
});
