import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNav from "./components/BottomTab";


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}
