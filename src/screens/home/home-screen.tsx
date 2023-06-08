import React,{useEffect,useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useSelector,useDispatch } from 'react-redux';
import {Text,View,ActivityIndicator,FlatList,StyleSheet} from 'react-native'

//Types
import type { AppState } from '../../redux/store';
import type { Product } from '../../redux/features/product';
import {ThunkDispatch} from '@reduxjs/toolkit'

//Actions
import { fetchProducts } from '../../redux/features/product';

//Components
import ProductListItem from '../../components/product-listitem';

//Colors
import { BACKGROUND_COLOR,TEXT_COLOR } from '../../constants/colors';

const HomeScreen = () => {
  const dispatch=useDispatch<ThunkDispatch<any,any,any>>()
  const {isLoading,isError,products}=useSelector((state:AppState)=>state.product)

  const renderItem=useCallback(({item}:{item:Product})=>{
    return <ProductListItem product={item} />
  },[])

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <SafeAreaView style={styles.parentContainer}>
        {isLoading?
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={'white'} />
        <Text style={styles.titleText}>Product List Loading..</Text>
      </View>
      :
      <View style={styles.listContainer}>
        <Text style={styles.titleText}>Product List</Text>
        <FlatList
        data={products}
        keyExtractor={item=>item.id.toString()}
        renderItem={renderItem}
        />
      </View>
      }
        
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  parentContainer:{
    backgroundColor:BACKGROUND_COLOR,
    flex:1
  },
  listContainer:{
    marginHorizontal:12,
    paddingBottom:60
  },
  titleText:{
    color:TEXT_COLOR,
    fontSize:30,
    fontWeight:'bold',
    marginVertical:8
  },
  loadingContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }
})
export default HomeScreen