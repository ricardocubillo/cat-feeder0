import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EventScreen from "./EventScreen";
import HomeScreen from "./HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
      name="Events" 
      component={EventScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-outline" color={color} size={size} />
        ),
      }} 
      />
    </Tab.Navigator>
  );
}
