import React,{useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native'
import {Text,View,FlatList} from 'react-native'
import {useSelector} from 'react-redux'

import { AppState } from '../../redux/store'
import { CartItem } from '../../redux/features/cart'
import CartListItem from '../../components/cart-listitem'

const CartScreen = () => {
  const {cart}=useSelector((state:AppState)=>state.cart)

  const renderItem=useCallback(({item}:{item:CartItem})=>{
    return <CartListItem cart={item} />
  },[])
  return (
    <SafeAreaView style={styles.parentContainer}>
        {cart.length==0?
        <View style={styles.cartContainer}>
          <Text style={styles.titleText}>{'Your Cart is empty!!\nAdd items to your Cart'}</Text>
        </View>:
        <View style={styles.cartContainer}>
          <Text style={styles.titleText}>Cart Items</Text>
          <FlatList
          data={cart}
          keyExtractor={item=>item.product.id.toString()}
          renderItem={renderItem}
          />
        </View>
      }
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:'#121212',
    flex:1,
    paddingHorizontal:12,
    alignItems:'center',
    paddingTop:12
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:8,
    color:'white'
  },
  image:{
    height:'40%',
    width:'80%',
    borderRadius:12
  },
  cartContainer:{
    flex:1
  },
  
  
})

export default CartScreen