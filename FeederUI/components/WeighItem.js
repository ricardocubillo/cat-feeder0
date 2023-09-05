import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function WeighItem({ navigation }) {
  return (
    <List.Item 
      title={"Select the weigh cat"}
      left={(props) => <MaterialCommunityIcons {...props} name="weight-kilogram" size={24} color="black" />} 
      onPress={() => navigation.navigate("SelectWeigh")}
    />
  );
}
