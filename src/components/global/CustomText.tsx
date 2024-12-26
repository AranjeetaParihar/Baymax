import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

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
    fontSize?:number;
    style?:TextStyle|TextStyle[];
    children?:React.ReactNode;
    numberOfLines?:number;
}
const CustomText:React.FC<Props> = ({
    variant='body',
    fontFamily=Fonts.Regular,
    fontSize,
    style,
    children,
    numberOfLines,
    ...props
}) => {

  let computedFontSize:number;
  switch (variant) {
    case "body":
      computedFontSize=RFValue(fontSize||22);
      break;
    case "h1":
      computedFontSize=RFValue(fontSize||20);
      break;
    case "h2":
      computedFontSize=RFValue(fontSize||18);
      break;
    case "h3":
      computedFontSize=RFValue(fontSize||16);
      break;
    case "h4":
      computedFontSize=RFValue(fontSize||14);
      break;
    case "h5":
      computedFontSize=RFValue(fontSize||12);
      break;
    case "h6":
      computedFontSize=RFValue(fontSize||10);
      break;
    case "body":
      computedFontSize=RFValue(fontSize||12);
      break;
  }
  return (
    <View>
      <Text style={{
        color:Colors.text, 
        fontSize:computedFontSize, 
        fontFamily:fontFamily
        }}
        numberOfLines={numberOfLines!==undefined?numberOfLines:undefined}>{children}</Text>
    </View>
  )
}

export default CustomText