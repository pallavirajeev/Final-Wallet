import LogIn from './screen/LogIn';
import SignUp from './screen/SignUp';
import Details from './screen/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Password from './screen/Password';
import History from './screen/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Log In"
          component={LogIn}
        />
        <Stack.Screen
        name="Sign Up"
        component={SignUp}
        />
        <Stack.Screen
        name="History"
        component={History}
        />
        <Stack.Screen
        name="Details"
        component={Details}
        />
        <Stack.Screen
        name="Forgot Password"
        component={Password}
        />
        </Stack.Navigator>
      </NavigationContainer>
)};
