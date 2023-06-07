import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,Button} from 'react-native'
import type {NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/root-navigator';

const LoginScreen = ({navigation}:{navigation:NavigationProp<RootStackParamList>}) => {
    
  return (
    <SafeAreaView>
        <Text style={{color:'black'}}>Login</Text>
        <Button title='go to home' onPress={()=>{navigation.navigate('Home')}}  />
    </SafeAreaView>
  )
}

export default LoginScreen