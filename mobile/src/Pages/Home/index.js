import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, AsyncStorage } from "react-native"
import Constants from "expo-constants"

const Home = ({ navigation }) => {

    const [name, setName] = useState("");

    async function HandleNavigate() {
        await AsyncStorage.setItem("userName", name)
        navigation.navigate("Missions")
    }
/*
    useEffect(()=>{
        AsyncStorage.getItem("userName").then(user=>{
            if(!user){
                navigation.navigate("Missions")
            }
        })
    },[]);
*/
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS == "ios") ? "padding" : undefined}>

            <SafeAreaView style={styles.container}>


                <Image style={styles.logo} source={require("../../Assets/logo2.png")} />
                <Text style={styles.message}>Acompanhando os profissionais do volante pelas estradas de todo o Brasil</Text>

                <View>
                    <Text style={styles.fieldLabel} >Apelido</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        autoCorrect={false}
                        placeholder="Digite seu apelido"
                    ></TextInput>                
                </View>


                <TouchableOpacity
                    onPress={HandleNavigate}
                    style={styles.startButton}
                >
                    <Text style={styles.starButtonText}>Entrar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
        paddingBottom: 20 + Constants.statusBarHeight,
        alignItems: "center",
        justifyContent: "space-between"

    },
    message: {
        marginTop:-55,
        fontSize: 16,
        textAlign:"center",
    },
    fieldLabel:{
        fontSize:16,
        color:"#f3c342",
        marginBottom:0,
        textAlign:"left",
        paddingHorizontal:10,
        fontWeight:"bold"
    },
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        borderBottomColor: "#9e260e",
        borderBottomWidth: 2,
        paddingHorizontal: 75,
        fontSize: 16
    },
    startButton: {
        backgroundColor: "#9e260e",
        paddingVertical: 15,
        paddingHorizontal: 105,
        borderColor: "#9e260e",
        borderWidth: 1,
        borderRadius:5
    },
    starButtonText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    }
})