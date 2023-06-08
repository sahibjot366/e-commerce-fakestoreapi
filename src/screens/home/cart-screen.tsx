import React,{useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,View,FlatList,Alert,StyleSheet} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

//Types
import type { AppState } from '../../redux/store'
import type { CartItem } from '../../redux/features/cart'

//Components
import CartListItem from '../../components/cart-listitem'
import Button from '../../ui/button'

//Actions
import { clearCart } from '../../redux/features/cart'

const CartScreen = () => {
  const {cart}=useSelector((state:AppState)=>state.cart)
  const dispatch=useDispatch()
  const renderItem=useCallback(({item}:{item:CartItem})=>{
    return <CartListItem cart={item} />
  },[cart])

  const renderHeaderItem=useCallback(()=>{
    return <Button label={`Proceed to buy ${cart.length} ${cart.length==1?'item':'items'}`} onPress={onBuyButtonPress} style={{alignSelf:'center'}} />
  },[cart.length])

  const onBuyButtonPress=()=>{
    Alert.alert('Thanks for shopping!!','Your order will be delivered in 2-3 days.')
    dispatch(clearCart())
  }
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
          ListHeaderComponent={renderHeaderItem}
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