
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

//Screens
import HomeScreen from '../screens/home/home-screen';
import CartScreen from '../screens/home/cart-screen';
import ProductDetailsScreen from '../screens/home/product-details';
import AccountDetails from '../screens/home/account-details';

//Types
import type { Product } from '../redux/features/product';


export type HomeTabParamList = {
    HomeScreenTab:undefined;
    CartScreenTab:undefined;
    AccountDetailsTab:undefined;
  };

  export type HomeStackParamList = {
    HomeScreen:undefined;
    ProductDetails:{product:Product};
  };


const Tab = createBottomTabNavigator<HomeTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const HomeTabBarIcon = (props: TabBarIconProps) => <Icon name='home' {...props} />


const CartTabBarIcon = (props: TabBarIconProps) => (
    <Icon name="shopping-cart" {...props} />
  );

const AccountTabBarIcon = (props: TabBarIconProps) => (
    <Icon name="user" {...props} />
  );


const tabOptions = {
  tabBarLabelStyle: {
    fontSize: 12,
  },
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};


export const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#404040',
          height: Platform.OS === 'android' ? 60 : 80,
        },
        tabBarItemStyle: {
          paddingVertical: Platform.OS === 'android' ? 8 : 0,
        },
      }}>
      <Tab.Screen
        options={{
          ...tabOptions,
          tabBarLabel: 'Home',
          tabBarIcon: HomeTabBarIcon,
        }}
        name="HomeScreenTab"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          ...tabOptions,
          tabBarLabel: 'Cart',
          tabBarIcon: CartTabBarIcon,
        }}
        name="CartScreenTab"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          ...tabOptions,
          tabBarLabel: 'Account',
          tabBarIcon: AccountTabBarIcon,
        }}
        name="AccountDetailsTab"
        component={AccountDetails}
      />
      
    </Tab.Navigator>
  );
};
