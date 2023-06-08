
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {Platform,View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector} from 'react-redux'

//Screens
import HomeScreen from '../screens/home/home-screen';
import CartScreen from '../screens/home/cart-screen';
import ProductDetailsScreen from '../screens/home/product-details';
import AccountDetails from '../screens/home/account-details';

//Types
import type { Product } from '../redux/features/product';
import type { AppState } from '../redux/store'



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
  const {cart}=useSelector((state:AppState)=>state.cart)
  const CartTabBarIcon = (props: TabBarIconProps) => (
    <View style={styles.parentContainer}>
      {cart.length>0?<View style={styles.amountIcon}><Text style={styles.amountText}>{cart.length}</Text></View>:null}
      <Icon name="shopping-cart" {...props} size={18} />
    </View>
    );

  const styles=StyleSheet.create({
    parentContainer:{
      alignItems:'center',justifyContent:'center',marginBottom:2
    },
    amountIcon:{
      alignSelf:'flex-end',borderRadius:100,padding:2,paddingHorizontal:5,backgroundColor:'red',alignItems:'center',justifyContent:'center'
    },
    amountText:{color:'white',fontSize:8},


  })
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
