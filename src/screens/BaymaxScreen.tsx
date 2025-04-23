import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/baymax/Background'
import Loader from '../components/baymax/Loader'
import BigHero6 from '../components/baymax/BigHero6'
import { playTts } from '../utils/ttsListners'
import SoundPlayer from 'react-native-sound-player'
import { prompt } from '../utils/data'
import { playSound } from '../utils/voiceUtils'
import Pedometer from '../components/pedometer/Pedometer'
import Instructions from '../components/baymax/Instructions'

const BaymaxScreen = () => {

  const [showInstruction, setShowInstruction] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [message, setMessage] = useState("");
  const [showPedometer, setShowPedometer] = useState(false);
  const blurOpacity = useRef(new Animated.Value(0)).current;

  const startBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }
  const stopBlur = () => {
    Animated.timing(blurOpacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const handleError = (err: string) => {
    playTts('Error, Please try again.')
    startBlur()
    setMessage('')
    setShowLoader(true)
    SoundPlayer.stop()
    setShowInstruction(false)
    console.log(err);
  }

  const handleResponse = async (type: string, promptText: string, sound: string) => {
    setShowLoader(true)
    console.log("49...");

    try {
      if (type === "meditation") {
        playTts("Focus on breathing.")
        playSound(sound)
        setMessage("meditation")
        return
      }
      if (type === "happiness") {
        console.log("57...");
        setTimeout(() => {
          playSound(sound)
        }, 5000)
      } else {
        playSound(sound)
      }
      setMessage(type)
      stopBlur()
    } catch (error: any) {
      handleError(error)
    } finally {
      setShowLoader(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(startBlur, 100)
    return () => clearTimeout(timer)
  }, [])

  const onOptionPressHandler = (type: string) => {
    console.log("78...", type);

    setShowInstruction(true)
    if (type === "pedometer") {
      setShowPedometer(true)
      setShowLoader(false)
      return
    }
    switch (type) {
      case "happiness":
        handleResponse(type, prompt.joke, "laugh")
        break;
      case "motivation":
        handleResponse(type, prompt.motivation, "motivation")
        break;
      case "health":
        handleResponse(type, prompt.health, "meditation")
        break;
      case "meditation":
        handleResponse(type, prompt.health, "meditation")
        break;
      default:
        handleError("No type found.")
    }
  }

  return (
    <View style={styles.container}>

      {message &&
        <Instructions onCross={() => {
          startBlur();
          setMessage('')
          setShowLoader(true)
          SoundPlayer.stop();
          setShowInstruction(false)
        }} message={message} />
      }

      {showPedometer &&
        <Pedometer
        // onCross={() => {
        //   startBlur();
        //   setMessage('')
        //   setShowLoader(true)
        //   setShowPedometer(false)
        //   SoundPlayer.stop();
        //   setShowInstruction(false)
        // }} 
        // message={message} 
        />
      }

      {showLoader &&
        <View style={styles.loadingContainer}>
          <Loader />
        </View>
      }
      {!showInstruction && <BigHero6 onPress={onOptionPressHandler} />}
      <Background blurOpacity={blurOpacity} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondry,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  loadingContainer: {
    zIndex: 1,
    position: "absolute",
    // justifyContent:"center",
    // alignItems:"center",
  }
})

export default BaymaxScreen