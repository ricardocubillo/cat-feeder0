import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function WeighItem({ navigation }) {
  return (
    <List.Item 
      title={"Select the weigh cat"}
      left={(props) => <List.Icon {...props} icon="weight" />} 
      onPress={() => navigation.navigate("SelectWeigh")}
    />
  );
}
