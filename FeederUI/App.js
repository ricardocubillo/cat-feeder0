import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import BottomTabNav from "./components/BottomTab";


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
