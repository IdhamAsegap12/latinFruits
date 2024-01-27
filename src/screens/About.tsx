import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function About({navigation}: any){
    return(
        <View style={styles.container}>
            <View style={styles.haeader}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            >
            <Icon style={{ 
            marginRight: 20 }} name="angle-left" size={25} color="white"/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>About</Text>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#212121'
        },
        haeader: {
            backgroundColor: "#3f51b5",
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: "row",
        },
        textHeader: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18
        },
        textTitle:{
            color: "white",
            fontSize: 16,
            fontWeight: "bold"
        },
        textBody:{
            color: "white",
            fontSize: 14,
            fontWeight: "bold"
        },
    }
)