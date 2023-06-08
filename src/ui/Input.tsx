import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import type {TextInput, TextInputProps} from 'react-native';
import {TextInput as NTextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  iconRight?: string;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  iconLeft?: string;
}

const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    iconRight,
    onRightIconPress,
    onLeftIconPress,
    error,
    iconLeft,
    ...inputProps
  } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);


    const labelColor=error?'red':'white'
    const paddingStyle={paddingRight:iconRight?18:12,paddingLeft:iconLeft?18:12}
    const borderColor=error?'red':isFocussed?'#A3A3A3':'#222222'

  return (
    <View style={styles.parentContainer}>
      {label && (
        <Text style={{color:labelColor}}>
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <NTextInput
          testID="STextInput"
          ref={ref}
          placeholderTextColor={'#A3A3A3'}
          style={[styles.inputField,paddingStyle,{borderColor}]}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
        />
        {iconLeft && (
          <Icon
            name={iconLeft}
            color="white"
            size={24}
            onPress={onLeftIconPress}
          />
        )}
        {iconRight && (
          <Icon
            name={iconRight}
            color="white"
            size={24}
            onPress={onRightIconPress}
          />
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

const styles=StyleSheet.create({
    parentContainer:{
        marginBottom:8,
        width:'90%'
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    inputField:{
        flex:1,
        borderWidth:1,
        padding:12,
        borderRadius:4,
        fontSize:16,
        color:'white'
    },
    leftIcon:{
        position:'absolute',
        left:2,
    },
    rightIcon:{
        position:'absolute',
        right:3
    },
    errorText:{
        color:'red'
    }
})


export default Input;