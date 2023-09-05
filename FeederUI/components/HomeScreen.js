import { View, Text } from "react-native";

import ShowTime from "./ShowTime";
import PickTime from "./PickTime";

export default function HomeScreen() {
  return (
    <View>
      <ShowTime />
      <PickTime />
    </View>
  );
}
