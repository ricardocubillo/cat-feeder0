import { FontAwesome5 } from "@expo/vector-icons";
import { List, Switch } from "react-native-paper";

export default function ManualAlimentation() {
  return (
    <List.Item
      title={"Enable manual feeding"}
      left={(props) => <FontAwesome5 {...props} name="cat" size={24} color="black" />}
      right={() => <Switch />}
    />
  );
}
