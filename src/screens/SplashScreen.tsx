import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native'
import React from 'react'
import { navigate } from '../utils/NavigationUtils'
import { Colors, lightColors } from '../utils/Constants'
import { screenHeight, screenWidth } from '../utils/Scaling'
import LinearGradient from "react-native-linear-gradient"

const bottomColor = [...lightColors].reverse()
const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Animated.View style={style.imgContainer}>
        <Image source={require("../assets/images/launch.png")} style={style.img}/>
      </Animated.View>

      <Animated.View style={style.gradientContainer}>
        <LinearGradient colors={bottomColor} style={style.gradient}></LinearGradient>
      </Animated.View>
    </View>
  )
}

const style = StyleSheet.create({
container:{
  alignItems: "center", justifyContent: "center", flex: 1 , backgroundColor:Colors.primary
},
gradientContainer:{
  position:"absolute",
  bottom:0,
height:"35%",
width:"100%"
},
gradient:{
height:"100%",
width:"100%"
},
imgContainer:{
width:screenWidth-20,
height:screenHeight*0.5
},
img:{
  width:"100%",
  height:"100%",
  resizeMode:"contain"
}
})

export default SplashScreen