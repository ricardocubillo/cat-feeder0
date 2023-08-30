import { View, Text, StyleSheet } from "react-native";

export default function EventScreen() {
  return (
    <View style={styles.events_view}>
      <Text>Event Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  events_view: {
    flex: 1,
    width: "auto",
    height: "auto"
  }
})
