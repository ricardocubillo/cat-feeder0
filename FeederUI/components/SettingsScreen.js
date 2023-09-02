import { View, Text } from "react-native";

import WeighItem from "./WeighItem";
import ManualAlimentation from "./ManualAlimentation"

export default function SettingsScreen({ navigation }) {
  return (
    <View>
      <ManualAlimentation />
      <WeighItem navigation={navigation}/>
    </View>
  );
}
