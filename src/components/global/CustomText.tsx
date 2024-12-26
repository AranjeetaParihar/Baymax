import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import { Fonts } from '../../utils/Constants';

interface Props{
    variant?:
    "h1"|
    "h2"|
    "h3"|
    "h4"|
    "h5"|
    "h6"|
    "body";
    fontFamily?:Fonts;
    fontsize?:number;
    style?:TextStyle|TextStyle[];
    children?:React.ReactNode;
    numberOfLines?:number;
}
const CustomText:React.FC<Props> = ({
    
}) => {
  return (
    <View>
      <Text>CustomText</Text>
    </View>
  )
}

export default CustomText