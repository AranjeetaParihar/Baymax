import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { circleRadius } from '../../utils/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useWaterStore } from '../../state/waterStore'
import { playTts } from '../../utils/ttsListners'
import { playSound } from '../../utils/voiceUtils'

const Water = () => {

    const { waterDrinkStamps, addWaterIntake } = useWaterStore();
    const totalSegments = 8;
    const completeSegments = waterDrinkStamps.length;

    const containerStyle = [
        styles.container,
        completeSegments === totalSegments && styles.containerCompleted
    ]

    const handlePress = () => { 
        if(completeSegments<totalSegments){
            playSound("ting2")
            const timestamp = new Date().toISOString()
            addWaterIntake(timestamp)
        }else{
            playTts("Daily water intake complete.")
        }
    }

    return (
        <TouchableOpacity style={containerStyle} onPress={handlePress}>
            <Icon name='water' color="#1ca3ec" size={RFValue(25)} />
            {Array.from({ length: totalSegments }).map((ele, idx) => {
                return <View
                    key={idx}
                    style={[
                        styles.segment,
                        {
                            backgroundColor: completeSegments === totalSegments ? "#00D100" :
                                idx < completeSegments ? "#1ca3ec" : "#eee",
                            transform: [{ rotate: `${(idx * 360 / totalSegments)}deg` },
                            { translateX: circleRadius / 2 - 5 }
                            ]
                        }
                    ]}
                />
            })}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: circleRadius,
        width: circleRadius,
        borderRadius: circleRadius,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        shadowOffset: { width: 1, height: 1 },
        elevation: 10,
        shadowRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2
    },
    containerCompleted: {
        shadowColor:"yellow",
        elevation:10
    },
    segmentConatiner: {
        position:"absolute",
        height:circleRadius,
        width:circleRadius,
        borderRadius:circleRadius/2,
        justifyContent:"center",
        alignItems:"center"
    },
    segment:{
        position:"absolute",
        width:8,
        height:4,
        borderRadius:2
    }
})

export default Water