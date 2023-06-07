import React,{useCallback} from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


type CounterProps={
    count:number;
    updateCount:(newCount:number)=>void,
    width?:string;
    minimumCount?:number;
    maximumCount?:number
}
const Counter:React.FC<CounterProps> = ({count,updateCount,width='90%',minimumCount=0,maximumCount=100}) => {

    const onDecrement=useCallback(()=>{
        if(count-1>=minimumCount) updateCount(count-1)
    },[count])

    const onIncrement=useCallback(()=>{
        if(count+1<=maximumCount) updateCount(count+1)
    },[count])
  return (
    <View style={[styles.parentContainer,{width}]}>
        <TouchableOpacity style={styles.iconContainer} onPress={onDecrement}>
            <Icon name='minus' />
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.countText}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onIncrement}>
            <Icon name='plus' />
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        flexDirection:'row',
        backgroundColor:'#222222',
        alignItems:'center'
    },
    textContainer:{
        width:'33%',
        padding:4,
        borderWidth:1,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    iconContainer:{
        width:'33%',
        padding:4,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#0A84FF',
        alignItems:'center',
        justifyContent:'center'
    },
    countText:{
        color:'white'
    }
})

export default Counter