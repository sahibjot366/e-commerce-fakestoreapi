import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from './navigation-container';

//Navigators
import { AuthNavigator ,AuthStackParamList} from './auth-navigator';
import { HomeNavigator,HomeTabParamList } from './home-navigator';



export type RootStackParamList = AuthStackParamList & HomeTabParamList & {
    Home:undefined;
    Auth:undefined;
  };
const Stack = createNativeStackNavigator<RootStackParamList>();


const Root=()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Auth' component={AuthNavigator} />
            <Stack.Screen name='Home' component={HomeNavigator} />
        </Stack.Navigator>
    )
}

export const RootNavigator = () => (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );