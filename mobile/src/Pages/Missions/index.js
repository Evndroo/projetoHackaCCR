import React, { useEffect,useState } from "react";
import Constants from "expo-constants";
import { Feather as Icons } from "@expo/vector-icons";
import {withNavigation} from "react-navigation"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from "react-native";
import ProgressCircle from 'react-native-progress-circle';

const Missions = ({ navigation }) => {

    const [name, setName] = useState("");
    const [selectedType, setSelectedType] = useState(1);
    
    const data = [
        { id: 1, name: "Dormir 8 horas", frequency: 1, type: "Saúde", time: "8 horas", points: 250, description:"Nada como um sono completo! Assim que possível tire 8 (Oito) horas de sono seguidas, caso isso se torne um costume, nos tempos de folga ficará mais disposto para aproveitar sua família e amigos, ou quem sabe até se sentir disposto para fazer um exercício!", status: { display: "Não iniciado", value: 2 } },
        { id: 2, name: "Fazer uma pausa para almoçar", frequency: 1, type: "Saúde", time: "1 hora", points: 100, description:" Pause para almoçar e coma devagar! Não precisa ter pressa para comer! Verá que depois de comer vai se sentir mais leve para seguir viagem, tente transformar isso num costume, assim se sentirá melhor com o tempo!", status: { display: "Não iniciado", value: 1 } },
        { id: 3, name: "Passar um dia com a sua família", frequency: 1, type: "Paz", time: "24 horas", points: 250, decsription:"Tire um dia de folga! Ou faça no final de semana, se organize para poder tirar ainda neste mês um dia para passar com a sua família, com certeza irá sorrir bastante ao matar a saudade!", status: { display: "Não iniciado", value: 1 } },
        { id: 4, name: "Consumir ao menos 3 frutas no dia", frequency: 1, type: "Saúde", time: "5 minutos", points: 100, description:"Consuma três ou mais frutas durante o seu dia, independente do horário ao final do dia caso tenha feito isso clique no botão de finalizar a missão, boa sorte! c:", status: { display: "Não iniciado", value: 1 } },
        { id: 5, name: "Passar num posto de atendimento da CCR", frequency: 1, type: "Saúde", time: "1 hora", points: 500, description:"A CCR possui um programa chamado Estrada para saúde? Nesse programa você consegue atendimento médico na estrada, encontre o mais próximo e peça para fazer qualquer exame nem seja de rotina, esperamos que o médico diga que está tudo bem!", status: { display: "Não iniciado", value: 1 } }
    ]



    useEffect(()=>{
        AsyncStorage.getItem("userName").then(user=>{
            setName(user)
        })

    },[])



    function handleOpenMission(mission){
        navigation.navigate("Details", {mission:mission});
    }

   


    return (
        <>
            <View style={styles.messageView}>
                <Text style={styles.message}>Missões</Text>
            </View>
            <View style={styles.container}>


                {/* Caixa com informações sobre o nível*/}
                <View style={styles.percentage}>
                    <ProgressCircle
                        percent={83}
                        radius={50}
                        borderWidth={8}
                        color="#9e260e"
                        shadowColor="#999"
                        bgColor="#ccc"
                    >
                        <Text style={{ fontSize: 18, color:"#9e260e", fontWeight:"bold"}}>{'83%'}</Text>
                    </ProgressCircle>
                    <View style={styles.levelTitle}>
                        <Text style={styles.levelTitleText}>Nível 1 - 500 pontos</Text>
                        <Text style={styles.levelSubtitleText}>
                            <Text style={styles.levelTitleText}>1/6</Text> missões feitas
                        </Text>
                    </View>
                </View>

                <View style={styles.missiomTypes}>
                    <TouchableOpacity style={styles.type, selectedType===1?styles.selected:styles.type} onPress={()=>setSelectedType(1)}>
                        <Text style={styles.typeTitle}>Diárias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.type, selectedType===3?styles.selected:styles.type} onPress={()=>setSelectedType(3)}>
                        <Text style={styles.typeTitle}>3 em 3 Dias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lastType, selectedType===7?styles.selected:styles.lastType} onPress={()=>setSelectedType(7)}>
                        <Text style={styles.typeTitle} >Semanais</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingVertical: 10 }}>
                    {data.map(item => {
                        return (
                            <TouchableOpacity  style={styles.mission} key={item.id}  onPress={()=>handleOpenMission(item)}>
                                <Text style={styles.missionTitle}>{item.name}</Text>

                                <View style={styles.missionDetails}>
                                    <Text>{item.type}</Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <View style={styles.point} />
                                        <Text> {item.status.display}</Text>
                                    </View>
                                </View>

                                <View style={styles.missionGameDetails}>
                                    <View style={{ flexDirection: "row", marginRight: 25 }}>
                                        <Icons name="clock" size={20} color="#f3c342" />
                                        <Text>{item.time}</Text>
                                    </View>

                                    <View style={{ flexDirection: "row" }}>
                                        <Icons name="star" size={20} color="#f3c342" />
                                        <Text>{item.points} pontos</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

            </View>
        </>
    )
}

export default withNavigation(Missions);



const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        left: 16
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
    },
    percentage: {
        flexDirection: "row",
        paddingHorizontal: 25,
        marginHorizontal: 15,
        marginBottom: 20,
        paddingVertical: 15,
        backgroundColor: "#ccc",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10
    },
    levelTitle: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: 15
    },
    levelTitleText: {
        color:"#9e260e",
        fontWeight: "bold",
        fontSize: 17
    },
    levelSubtitleText: {
        fontSize: 17
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
    message: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    missiomTypes: {
        flexDirection: "row",
        marginBottom: 15,
        borderColor: "#bbb",
        padding: 10
    },
    type: {
        width: "32%",
        borderRightWidth: 1,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    selected: {
        width: "32%",
        borderRightWidth: 1,
        borderRightColor: "#bbb",
        borderBottomWidth: 3,
        borderBottomColor: "#f3c342",
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    lastType: {
        width: "32%",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor:"#ccc",
        paddingVertical: 5,
    },
    typeTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
    mission: {
        marginHorizontal: 25,
        backgroundColor: "#eee",
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: "#ddd",
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 15
    },
    missionDetails: {
        flexDirection: "row",
        width: "65%",
        justifyContent: "space-between",
        marginBottom: 30,
        marginTop: 5
    },
    missionGameDetails: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "flex-start",
    },
    missionTitle: {
        color:"#9e260e",
        fontWeight: "bold",
        fontSize: 16
    },
    point: {
        backgroundColor: "#f3c342",
        width: 5,
        height: 5,
        borderRadius: 50
    }



});