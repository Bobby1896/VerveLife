import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import LoginRegister from './components/LoginRegister';
import Sliders from './components/Sliders';
import RegistrationInfo from './components/RegistrationInfo';
import RecoverPassword from './components/RecoverPassword';
import AccountCreation from './components/AccountCreation';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sliders"
          component={Sliders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration Info"
          component={RegistrationInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recover Password"
          component={RecoverPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account Creation"
          component={AccountCreation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
