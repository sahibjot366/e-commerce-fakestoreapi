import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import LoginScreen from '../screens/authentication/login-screen';

export type AuthStackParamList = {
  LoginScreen: undefined;
};


const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
        headerTitle: '',
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
