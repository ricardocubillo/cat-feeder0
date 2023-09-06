import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTab from "./BottomTab";


const Stack = createNativeStackNavigator();

export default function MainView() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Main"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
