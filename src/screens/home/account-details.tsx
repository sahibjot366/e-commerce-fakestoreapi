import React from 'react'
import {StyleSheet,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'

//Types
import type { AppState } from '../../redux/store'

//Colors
import { BACKGROUND_COLOR,TEXT_COLOR } from '../../constants/colors'

const AccountDetails = () => {
const {userDetails}=useSelector((state:AppState)=>state.user)

  return (
    <SafeAreaView style={styles.parentContainer}>
      <Text style={styles.titleText}>User Details</Text>
      <Text style={styles.detailsText}><Text style={styles.labelText}>Name: </Text>{userDetails.name}</Text>
      <Text style={styles.detailsText}><Text style={styles.labelText}>Email: </Text>{userDetails.email}</Text>
      <Text style={styles.detailsText}><Text style={styles.labelText}>Phone Number: </Text>{userDetails.phonenumber}</Text>
      <Text style={styles.detailsText}><Text style={styles.labelText}>Address: </Text>{userDetails.address}</Text>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:BACKGROUND_COLOR,
    flex:1,
    paddingHorizontal:12,
    alignItems:'center',
    paddingTop:12,
    justifyContent:'center'
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:36,
    color:TEXT_COLOR
  },
  labelText:{
    color:TEXT_COLOR,
    fontWeight:'bold'
  },
  detailsText:{
    color:TEXT_COLOR,
    alignSelf:'flex-start'
  }
})
export default AccountDetails