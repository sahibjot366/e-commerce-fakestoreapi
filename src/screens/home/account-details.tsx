import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import type { AppState } from '../../redux/store'

const AccountDetails = () => {
const {userDetails}=useSelector((state:AppState)=>state.user)
console.log(userDetails)
  return (
    <SafeAreaView>

    </SafeAreaView>
  )
}

export default AccountDetails