import { View } from "react-native";

import WeightSection from "./WeightItem";
import ManualAlimentation from "./ManualAlimentation"

export default function SettingsScreen() {
  return (
    <View>
      <ManualAlimentation />
      <WeightSection />
    </View>
  );
}
