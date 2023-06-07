import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import type {NavigationProp} from '@react-navigation/native';
import {Text,Button} from 'react-native'

import { HomeStackParamList } from '../../navigation/home-navigator'
const HomeScreen = ({navigation}:{navigation:NavigationProp<HomeStackParamList>}) => {
  return (
    <SafeAreaView>
        <Text style={{color:'black'}}>Login</Text>
        <Button title='go to product details' onPress={()=>{navigation.navigate('ProductDetails')}}  />
    </SafeAreaView>
  )
}

export default HomeScreen