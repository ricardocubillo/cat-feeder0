import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectWeigh from "./SelectWeigh";
import BottomTab from "./BottomTab";
import SettingsScreen  from "./SettingsScreen";


const Stack = createNativeStackNavigator();

export default function MainView() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Main"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SelectWeigh" component={SelectWeigh} />
    </Stack.Navigator>
  );
}
