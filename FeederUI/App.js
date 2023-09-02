import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import MainView from './components/MainView';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainView />
      </NavigationContainer>
    </PaperProvider>
  );
}
