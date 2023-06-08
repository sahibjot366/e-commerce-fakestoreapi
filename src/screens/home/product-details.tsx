import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,StyleSheet,Image,View} from 'react-native'
import {useDispatch} from 'react-redux'

//Types
import type { Product } from '../../redux/features/product'

//Components
import Button from '../../ui/button'
import Counter from '../../components/counter'

//Actions
import { addItem } from '../../redux/features/cart'

//Colors
import { BACKGROUND_COLOR,TEXT_COLOR } from '../../constants/colors'

type routeParams={
  params:{
    product:Product
  }
}

const ProductDetailsScreen = ({route}:{route:routeParams}) => {
  const {product}=route.params;
  const [amount,setAmount]=useState(1)
  const dispatch=useDispatch()
  
  return (
    <SafeAreaView style={styles.parentContainer}>
        <Image source={{uri:product.image}} style={styles.image} />
        <Text style={[styles.commonText,styles.titleText]}>{product.title}</Text>
        <Text style={styles.commonText}>{`$${product.price}`}</Text>
        <Text style={styles.commonText}>{product.description}</Text>
        <View style={styles.buttonContainer}>
          <Counter count={amount} updateCount={(newCount)=>{setAmount(newCount)}} width='25%' minimumCount={1} />
          <Button label='Add to Cart' onPress={()=>{dispatch(addItem({product,amount}))}} width='65%'/>
        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:BACKGROUND_COLOR,
    flex:1,
    paddingHorizontal:12,
    alignItems:'center',
    justifyContent:'center'
  },
  commonText:{
    alignSelf:'flex-start',
    color:TEXT_COLOR,
    marginVertical:8,
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
    marginVertical:8,
  },
  image:{
    height:'40%',
    width:'80%',
    borderRadius:12
  },
  buttonContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:16,
    alignItems:'center'
  }
  
})

export default ProductDetailsScreen