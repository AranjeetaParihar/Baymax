import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loader = () => {
  return (
    <View>
      <LottieView 
      source={require("../../assets/animations/sync.json")}
      style={{height:150,width:250}}
      autoPlay={true}
      loop/>
    </View>
  )
}

export default Loader