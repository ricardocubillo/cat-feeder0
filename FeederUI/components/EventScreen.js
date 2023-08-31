import { View, Text, StyleSheet } from "react-native";

import FoodContainer from "./FoodContainer";

export default function EventScreen() {
  return (
    <View style={styles.events_view}>
      <FoodContainer />
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
