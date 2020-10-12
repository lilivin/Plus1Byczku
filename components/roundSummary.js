import React, { useState, useEffect } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar, FlatList, ScrollView } from 'react-native'
import Auctions from './auctions.js';

export default function roundSummary(props) {
    const [endTime, setEndTime] = useState(false);
    const [answers, setAnswers] = useState([])

    function resetFunction() {
        setEndTime(true);
    }

    useEffect(() => {
        setAnswers(props.answers)
    })

    return (
        <View>
            {endTime ? <Auctions /> :
                <View style={styles.containerSummary}>
                    <Text style={styles.question}>{props.question}</Text>
                    <ScrollView style={styles.listItems}>
                        {answers.map((item, i ) => <Text key={i} style={styles.listItem}>{item}</Text>)}
                    </ScrollView>
                    <TouchableOpacity onPress={resetFunction} style={props.winTeam === 'firstTeam' ? styles.appButtonContainerFirstTeam : styles.appButtonContainerSecondTeam}>
                        <Text style={styles.appButtonText}>Klik</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    containerSummary: {
        paddingTop: 30,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    appButtonContainerFirstTeam: {
        elevation: 8,
        backgroundColor: "#30BCED",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        width: 300,
      },
      appButtonContainerSecondTeam: {
        elevation: 8,
        backgroundColor: "#FC5130",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        width: 300,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      listItems: {
        marginVertical: 20,
        height: '70%',
        width: 300,
      },
      listItem: {
        textAlign: 'center',
        marginVertical: 2
      },
      question: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 40
      }
  });