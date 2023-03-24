import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Task = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.task}</Text>

            </View>

            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15

        
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#BFCDDC',
        borderRadius: 7,
        marginRight: 10
    },
    itemText:{
        fontSize: 15,
        fontWeight: 'bold',
        maxWidth: '85%',
    },
    circle:{
        width: 12,
        height: 12,
        borderColor:'#7BAFD4',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;