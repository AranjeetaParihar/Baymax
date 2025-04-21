import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/baymax/Background'
import Loader from '../components/baymax/Loader'
import BigHero6 from '../components/baymax/BigHero6'

const BaymaxScreen = () => {

  const [showInstruction, setShowInstruction] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showMessage, setShowMessage] = useState("");
  const [showPedometer, setShowPedometer] = useState(false);
  const blurOpacity = useRef(new Animated.Value(0)).current;

  const startBlur = () => {
    Animated.timing(blurOpacity,{
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start()
  }
  const stopBlur = () => {
    Animated.timing(blurOpacity,{
      toValue:0,
      duration:2000,
      useNativeDriver:true
    }).start()
  }

  useEffect(()=>{
    const timer = setTimeout(startBlur,100)
    return ()=> clearTimeout(timer)
  },[])

  return (
    <View style={styles.container}>
      {showLoader && 
      <View style={styles.loadingContainer}>
        <Loader/>
      </View>
      }
      {!showInstruction && <BigHero6 onPress={()=>{}}/>}
      <Background blurOpacity={blurOpacity}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.secondry,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },
  loadingContainer:{
    zIndex:1,
    position:"absolute",
    // justifyContent:"center",
    // alignItems:"center",
  }
})

export default BaymaxScreen