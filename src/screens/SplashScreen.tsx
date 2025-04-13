import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { navigate } from '../utils/NavigationUtils'
import { Colors, Fonts, lightColors } from '../utils/Constants'
import { screenHeight, screenWidth } from '../utils/Scaling'
import LinearGradient from "react-native-linear-gradient"
import CustomText from '../components/global/CustomText'
import LottieView from 'lottie-react-native';
import Animated,{ useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const bottomColor = [...lightColors].reverse()
const SplashScreen:FC= () => {

  // initially at the very bottom
  const baymaxAnimation = useSharedValue(screenHeight*0.8);
  const messageAnimation = useSharedValue(screenHeight*0.8);

  const launchAnimation = async() => {
    messageAnimation.value = screenHeight*0.001;
    setTimeout(()=>{
      baymaxAnimation.value = -screenHeight*0.02;
    },600)
  }

  // transform baymax
  const animateImageStyle = useAnimatedStyle(()=>{
    return {
      transform:[{
        translateY: withTiming(baymaxAnimation.value, {duration:1500}),
       
      }]
    }
  })

  const messageContainerStyle = useAnimatedStyle(()=>{
    return {
      transform:[{
        translateY: withTiming(messageAnimation.value, {duration:1200}),
       
      }]
    }
  })
  
  useEffect(()=>{
    launchAnimation();
  },[])

  return (
    <View style={style.container}>
      <Animated.View style={[style.imgContainer,animateImageStyle]}>
        <Image source={require("../assets/images/launch.png")} style={[style.img,]}/>
      </Animated.View>

      <Animated.View style={[style.gradientContainer,messageContainerStyle]}>
        <LinearGradient colors={bottomColor} style={style.gradient}>
          <View style={style.textContainer}>
            <CustomText fontSize={34} fontFamily={Fonts.Theme}>BAYMAX!</CustomText>
            <LottieView source={require("../assets/animations/sync.json")} 
            style={{width:300,height:100}} autoPlay={true} loop>
            </LottieView>
            <CustomText fontSize={12}>Synchronizing best configurations for you...</CustomText>
          </View>
        </LinearGradient>
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
height:"33%",
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
},
textContainer:{
  backgroundColor:"white",
  flex:1,
  borderRadius:20,
  padding:20,
  shadowOffset:{width:1,height:1},
  shadowOpacity:1,
  shadowRadius:2,
  alignItems:"center",
  shadowColor:Colors.border
}
})

export default SplashScreen