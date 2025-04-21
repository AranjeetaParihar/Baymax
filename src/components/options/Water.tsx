import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { circleRadius } from '../../utils/Constants'

const Water = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>Water</Text>
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
    }
})

export default Water