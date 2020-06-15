import React, { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import Constants from "expo-constants"
import { Feather as Icons } from "@expo/vector-icons";


const Details = ({ navigation }) => {

    function handleOpenMissions() {
        navigation.navigate("Missions");
    }

    const data = navigation.getParam("mission")

    /*data.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
*/

    return (
        <>
            <View style={styles.messageView}>
                <TouchableOpacity style={styles.backButton} onPress={handleOpenMissions} >
                    <Icons name="arrow-left" size={30} color="white" ></Icons>
                </TouchableOpacity>
                <Text style={styles.message}>Detalhes da missão</Text>
            </View>
            <View style={styles.container}>
                {/*Header*/}
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", marginRight: 25 }}>
                        <Icons name="clock" size={20} color="#f3c342" />
                        <Text>{data.time}</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Icons name="star" size={20} color="#f3c342" />
                        <Text>{data.points} pontos</Text>
                    </View>
                </View>

                {/*Title*/}
                <View>
                    <Text style={styles.missionTitle}>{data.name}</Text>

                    <View style={styles.missionDetails}>
                        <Text>{data.type}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.point} />
                            <Text> {data.status.display}</Text>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={true}>
                        <Text>{data.description}</Text>
                    </ScrollView>
                </View>

                <View>
                    <TouchableOpacity style={styles.submit}>
                        <Text style={styles.submitText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20 + Constants.statusBarHeight,
        alignItems: "center",
        justifyContent:"space-evenly",
        marginTop:15
    },
    missionTitle: {
        marginTop: 35,
        width: "100%",
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 18
    },
    messageView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#9e260e",
        marginTop: 1 + Constants.statusBarHeight,
        paddingHorizontal: 25,
        paddingVertical: 15,
        justifyContent: "center"
    },
    backButton: {
        position: "absolute",
        left: 16
    },
    message: {
        marginLeft: 35,
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    missionDetails: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        marginBottom: 30,
        marginTop: 5
    },
    point: {
        borderColor:"#f3c342",
        borderWidth:1,
        marginLeft: 20,
        backgroundColor: "#f3c342",
        width: 5,
        height: 5,
        borderRadius: 50
    },
    submit:{
        width:"75%",
        backgroundColor:"white",
        borderColor:"#f3c342",
        borderWidth:1,
        paddingVertical:20,
        paddingHorizontal:80,
        borderRadius:5
    },
    submitText:{
        color:"#f3c342",
        textAlign:"center",
        fontSize:16
    }
});