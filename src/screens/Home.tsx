import React, { PropsWithChildren, useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    FlatList, 
    TouchableOpacity,
    TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"



export default function Home({navigation}: {navigation: any}){
    let data = [
        {judul: 'Apel', deskripsi: 'Apel adalah sebuah buah'},
        {judul: 'Jeruk', deskripsi: 'Jeruk adalah sebuah buah'},
        {judul: 'Pir', deskripsi: 'Pir adalah sebuah buah'},
        {judul: 'Anggur', deskripsi: 'Anggur adalah sebuah buah'},
        {judul: 'Sirsak', deskripsi: 'Sirsak adalah sebuah buah'},
        {judul: 'Pepaya', deskripsi: 'Pepaya adalah sebuah buah'},
        {judul: 'Nangka', deskripsi: 'Nangka adalah sebuah buah'},
        {judul: 'Alpukado', deskripsi: 'Alpukado adalah sebuah buah'},
        {judul: 'Sawo', deskripsi: 'Sawo adalah sebuah buah'},
        {judul: 'Rambutan', deskripsi: 'Rambutan adalah sebuah buah'},
        {judul: 'Lengkeng', deskripsi: 'Lengkeng adalah sebuah buah'},
    ];


    let [pencarian, setPencarian] = useState("");

    function pencarianData(){
        data = data
        if (pencarian != "") {
            data = data.filter(item => item.judul.toLowerCase().includes(pencarian))
        }

        return data
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#2c387e"  />
            <View style={styles.haeader}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textHeader}>Home</Text>
                </View>
                <TouchableOpacity
                onPress={() => navigation.navigate('About')}
                >
                <Icon style={{ color: "white" }} name="info" size={20} />
                </TouchableOpacity>
            </View>
            <TextInput onChangeText={(text)=>setPencarian(pencarian = text)} placeholder="Cari . . ." style={styles.search}/>
            <View>
                <FlatList
                data={pencarianData()}
                renderItem={({item, index})=> <TouchableOpacity style={styles.lis}
                onPress={() => navigation.navigate('Detail', {
                    judul: item.judul,
                    deskripsi: item.deskripsi
                }) }
                >
                    <Text style={styles.textTitle}>{item.judul}</Text>
                    <Text style={styles.textBody}>{item.deskripsi}</Text>
                </TouchableOpacity> }
                keyExtractor={(item) => item.judul}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    lis: {
        backgroundColor: "#3f51b5",
        marginTop: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10
    },
    search:{
        backgroundColor: "white",
        marginHorizontal: 17,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 7,
        borderRadius: 30
    }
})