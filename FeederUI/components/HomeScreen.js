import { View, SafeAreaView } from "react-native";

import ShowTime from "./ShowTime";
import PickTime from "./PickTime";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ShowTime />
      <PickTime />
    </SafeAreaView>
  );
}

