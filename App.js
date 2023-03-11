import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import GetStarted1 from './components/GetStarted1';
import GetStarted2 from './components/GetStarted2';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Get Started"
          component={GetStarted1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Get Started 2"
          component={GetStarted2}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
