import React from "react";
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Learning React Native</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height:50,
        backgroundColor:"#188",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{                   //no 
        fontSize:28,
        fontWeight:"400",
        color:"white"
    }
})

export default Header;