import React, { useEffect } from 'react';
import { View } from 'react-native';
import Icons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize"
import Navigation from './src/navigation/Navigation';
import { requestPermission } from './src/notification/notificationPermission';

const App = () => {

  const permissionCheck = () => {
    requestPermission()
  }

  useEffect(()=>{
    permissionCheck()
  },[])

  return (
    <Navigation/>
  )
}

export default App