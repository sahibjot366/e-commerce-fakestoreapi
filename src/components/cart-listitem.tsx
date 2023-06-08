import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useDispatch} from 'react-redux'

//Types
import type { CartItem } from '../redux/features/cart'

//Components
import Counter from './counter'

//Actions
import { updateAmount,removeItem } from '../redux/features/cart'

//Colors
import { LISTITEM_COLOR,TEXT_COLOR } from '../constants/colors'


type CartListItemProps={
    cart:CartItem
}


const CartListItem:React.FC<CartListItemProps> = ({cart}) => {
   
    const [amount,setAmount]=useState(cart.amount)

    useEffect(()=>{
        setAmount(cart.amount)
    },[cart.amount])

    const dispatch=useDispatch()
    const onUpdateCount=(newCount:number)=>{
        if(newCount==0)
            dispatch(removeItem(cart.product.id))
        else
            dispatch(updateAmount({id:cart.product.id,updatedAmount:newCount}))
        setAmount(newCount)
    }

  return (
    <View style={styles.parentContainer}>
        <View style={styles.imageAndCounterContainer}>
            <Image source={{uri:cart.product.image}} style={styles.imageStyle} />
            <Counter count={amount} updateCount={onUpdateCount} width='50%' />
        </View>
        <View style={styles.detailsContainer}>
            <Text style={[styles.text,styles.titleText]}>{cart.product.title}</Text>
            <Text style={styles.text}>{`$${cart.product.price}`}</Text>
            <Icon name='trash' size={30} color='red' onPress={()=>{dispatch(removeItem(cart.product.id))}} style={styles.icon} />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:LISTITEM_COLOR,
        padding:12,
        marginVertical:2,
        borderRadius:4,
    },
    imageAndCounterContainer:{
        width:'50%',
        alignItems:'center'
    },
    detailsContainer:{
        width:'50%',
        alignItems:'center'
    },
    imageStyle:{
        borderRadius:4,
        width: 80,
        height: 80,
        marginBottom:2
    },
    text:{
        color:TEXT_COLOR,
        marginBottom:2
    },
    titleText:{
        fontWeight:'bold'
    },
    icon:{
        marginTop:8
    }
})

export default CartListItem