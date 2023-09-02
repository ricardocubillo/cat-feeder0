import { List, Switch } from "react-native-paper";

export default function ManualAlimentation() {
  return (
    <List.Item
      title={"Enable manual feeding"}
      left={(props) => <List.Icon {...props} icon="cat" />}
      right={() => <Switch />}
    />
  );
}
