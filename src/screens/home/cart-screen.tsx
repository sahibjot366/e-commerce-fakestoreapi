import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text} from 'react-native'
import {useSelector} from 'react-redux'

import { AppState } from '../../redux/store'

const CartScreen = () => {
  const {cart}=useSelector((state:AppState)=>state.cart)
  console.log(cart)
  return (
    <SafeAreaView>
        <Text style={{color:'black'}}>Login</Text>
    </SafeAreaView>
  )
}

export default CartScreen