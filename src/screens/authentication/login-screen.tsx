import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,StyleSheet} from 'react-native'
import {Button,Input} from '../../ui';
import {useDispatch} from 'react-redux'

//Types
import type {NavigationProp} from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/root-navigator';

//Actions
import { setUserDetails } from '../../redux/features/user';

//Colors
import { BACKGROUND_COLOR,TEXT_COLOR } from '../../constants/colors';

const LoginScreen = ({navigation}:{navigation:NavigationProp<RootStackParamList>}) => {

  const dispatch=useDispatch()

  const onLogin=()=>{
    if(!details.address || !details.email || !details.name || !details.password || !details.phonenumber){
        setShowError(true)
        return;
    }
    const samplejwttoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYyMTQ4MjUwOH0.x_vLHtTCp3FFQj7swtSMUyHM8NJ7g9MYIdhIsXyxyyg';
    dispatch(setUserDetails({...details,jwttoken:samplejwttoken}))
    setShowError(false)
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
  const [showError,setShowError]=useState(false)
    
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
          {showError?<Text style={styles.errorText}>All fields are required! Please fill all the fields.</Text>:null}
        <Button label='Log In' onPress={onLogin}  />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:BACKGROUND_COLOR,
    flex:1,
    paddingHorizontal:18,
    alignItems:'center',
    justifyContent:'center',
    
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:24,
    color:TEXT_COLOR,
    alignSelf:'flex-start'
  },
  errorText:{
    color:'red'
  }
})

export default LoginScreen