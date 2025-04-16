import React, { FC } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import { BlurView } from '@react-native-community/blur'

const Background:FC<{blurOpacity:Animated.Value}>=({blurOpacity}) =>{
    
  return (
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/baymax.png")}/>
        <Animated.View style={[styles.absoluteStyle,{opacity:blurOpacity}]}>
            <BlurView 
            style={styles.absoluteStyle}
            blurType='light'
            blurAmount={2}
            />
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        height:screenHeight*1.2,
        width:screenWidth,
        position:"absolute",
        // zIndex:-1
    },
    image:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        bottom:-screenHeight*0.2
    },
    absoluteStyle:{
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        height:"100%"
    }
})

export default Background