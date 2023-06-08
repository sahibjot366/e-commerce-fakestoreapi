import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

//Colors
import { BLUE_TINT_COLOR,TEXT_COLOR } from '../constants/colors'


type ButtonProps={
    label:string;
    onPress:()=>void,
    width?:string;
    style?:Object
}

const Button:React.FC<ButtonProps> = ({label,onPress,width='90%',style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.parentContainer,{width},style]}>
        <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    parentContainer:{
        backgroundColor:BLUE_TINT_COLOR,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:8,
        borderRadius:4
    },
    labelText:{
        color:TEXT_COLOR
    }
})

export default Button