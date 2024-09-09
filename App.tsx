import * as React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';

// import AddUser from './screens/AddUser';
//import Dashboard from './screens/Dashboard';

// Define types for navigation stack
type RootStackParamList = {
  Login: undefined;
  AddUser: undefined;
  Dashboard: undefined;
};

// Create the stack navigator with typed screens
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    // <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AddUser" component={} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
