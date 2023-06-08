import React from 'react'
import {TouchableOpacity,StyleSheet,Image, Text,View} from 'react-native'
import { useNavigation } from '@react-navigation/native'

//Types
import type { Product } from '../redux/features/product'
import type { HomeStackParamList } from '../navigation/home-navigator'
import type {NavigationProp} from '@react-navigation/native';

//Colors
import { LISTITEM_COLOR,BLUE_TINT_COLOR,TEXT_COLOR } from '../constants/colors'

type ProductListItemProps={
    product:Product
}

const ProductListItem:React.FC<ProductListItemProps> = ({product}) => {
    const navigation:NavigationProp<HomeStackParamList>=useNavigation()
  return (
    <TouchableOpacity style={styles.parentContainer}  onPress={()=>{navigation.navigate('ProductDetails',{product})}}>
        <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={{uri:product.image}} />
        </View>
        <View style={styles.detailsContainer}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>{product.title}</Text>
            <Text style={styles.priceText}>{`$${product.price}`}</Text>
        </View>

    </TouchableOpacity>
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
    imageStyle:{
        borderRadius:4,
        width: 80,
        height: 80,
    },
    detailsContainer:{
        width:'50%'
    },
    titleText:{
        color:BLUE_TINT_COLOR
    },
    priceText:{
        color:TEXT_COLOR
    },
    imageContainer:{
        width:'50%',
    }
})

export default ProductListItem