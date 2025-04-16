import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { FC } from 'react'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import { bigHero6Data } from '../../utils/data'

const BigHero6:FC<{onPress:(type:string)=>void}> = ({onPress}) => {
  return (
    <View style={styles.circle}>
      {
        bigHero6Data.map((item,index)=>{
            return(
                <Animated.View key={index} >
                    <Text>{item}</Text>
                </Animated.View>
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    circle:{
        width:screenWidth*0.8,
        height:screenHeight*0.5,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        zIndex:1
    },
    item:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"100%"
    }
})

export default BigHero6