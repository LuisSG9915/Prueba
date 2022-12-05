import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Nav } from './src/navigation/Nav';

 const  App = () => {
  return (
    <NavigationContainer>
      <Nav/>
    </NavigationContainer>
  );
}
export default App