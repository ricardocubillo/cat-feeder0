import { View, StyleSheet, ScrollView } from "react-native";

import FoodContainer from "./FoodContainer";
import WeightScale from "./WeightScale";
import WaterContainer from "./WaterContainer";
import FeedingCounter from "./FeedingCounter";

export default function EventScreen() {
  return (
    <View style={styles.events_view}>
      <ScrollView>
        <FoodContainer />
        <WaterContainer />
        <WeightScale />
        <FeedingCounter />
      </ScrollView>
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
