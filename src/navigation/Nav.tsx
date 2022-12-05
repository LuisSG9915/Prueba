import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import PruebaScreen from '../screen/PruebaScreen';

const Stack = createStackNavigator();

export const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PruebaScreen" component={PruebaScreen} />
    </Stack.Navigator>
  );
}