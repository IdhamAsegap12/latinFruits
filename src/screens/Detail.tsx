import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Detail({route, navigation}:any){
    const{judul, deskripsi} = route.params;
    return(
        <View style={styles.container}>
            <View style={styles.haeader}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Icon name="angle-left" style={{ marginRight: 20 }} size={25} color="white"/>
            </TouchableOpacity>
            <Text style={styles.textHeader}>Detail</Text>
            </View>
            <View>
                <Text style={styles.textTitle}>{judul}</Text>
                <Text style={styles.textBody}>{deskripsi}</Text>
            </View>
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
            flexDirection: "row",  
            paddingHorizontal: 20
        },
        textHeader: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
        },
        textTitle:{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center"
        },
        textBody:{
            color: "white",
            fontSize: 14,
            textAlign: "center"
        },
    }
)