import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

type ButtonProps={
    label:string;
    onPress:()=>void,
    width?:string;
}

const Button:React.FC<ButtonProps> = ({label,onPress,width='90%'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.parentContainer,{width}]}>
        <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        backgroundColor:'#0A84FF',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:8,
        borderRadius:4
    },
    labelText:{
        color:'white'
    }
})

export default Button