import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,StyleSheet} from 'react-native'
import type {NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/root-navigator';
import {Button,Input} from '../../ui';
import {useDispatch} from 'react-redux'

import { setUserDetails } from '../../redux/features/user';

const LoginScreen = ({navigation}:{navigation:NavigationProp<RootStackParamList>}) => {



  const dispatch=useDispatch()

  const onLogin=()=>{
    const samplejwttoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYyMTQ4MjUwOH0.x_vLHtTCp3FFQj7swtSMUyHM8NJ7g9MYIdhIsXyxyyg';
    dispatch(setUserDetails({...details,jwttoken:samplejwttoken}))
    navigation.navigate('Home')
  }

  type detailsType={
    email:string;
    password:string;
    name:string;
    address:string;
    phonenumber:string;
  }
  const [details,setDetails]=useState<detailsType>({email:'',password:'',name:'',address:'',phonenumber:''})
  const [showPassword,toggleShowPassword]=useState(false)
    
  return (
    <SafeAreaView style={styles.parentContainer}>
        <Text style={styles.titleText}>Login</Text>
        <Input
            placeholder="Name"
            value={details?.name}
            onChangeText={(updatedText)=>{setDetails((prev)=>({...prev,name:updatedText}))}}
          />
        <Input
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            value={details?.email}
            onChangeText={(updatedText)=>{setDetails((prev)=>({...prev,email:updatedText}))}}
          />
          <Input
            placeholder="Phone Number"
            value={details?.phonenumber}
            onChangeText={(updatedText)=>{setDetails((prev)=>({...prev,phonenumber:updatedText}))}}
          />
          <Input
            placeholder="Address"
            value={details?.address}
            onChangeText={(updatedText)=>{setDetails((prev)=>({...prev,address:updatedText}))}}
          />
          <Input
            placeholder="Password"
            secureTextEntry={!showPassword}
            iconRight={showPassword ? 'ios-eye-off-outline' : 'ios-eye-outline'}
            onRightIconPress={() => toggleShowPassword(!showPassword)}
            value={details?.password}
            onChangeText={(updatedText)=>{setDetails((prev)=>({...prev,password:updatedText}))}}
          />
        <Button label='Log In' onPress={onLogin}  />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:'#121212',
    flex:1,
    paddingHorizontal:18,
    alignItems:'center',
    justifyContent:'center',
    
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:24,
    color:'white',
    alignSelf:'flex-start'
  },
})

export default LoginScreen