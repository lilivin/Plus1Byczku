import React, { useState, useEffect } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar, FlatList, ScrollView } from 'react-native'
import PunishmentSectionWon from './punishmentSectionWon.js';
import PunishmentSectionLose from './punishmentSectionLose.js';

export default function roundSummary(props) {
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [answers, setAnswers] = useState([])

    function checkCorrectAnswer() {
        setCorrectAnswer('win');
    }

    function checkIncorrectAnswer() {
        setCorrectAnswer('lose');
    }

    useEffect(() => {
        setAnswers(props.answers)
    })

    return (
        <View>
            {correctAnswer === 'win' ? <PunishmentSectionWon correctAnswers={props.correctAnswers} proposeAnswers={props.proposeAnswers}/> : 
            correctAnswer === 'lose' ? <PunishmentSectionLose correctAnswers={props.correctAnswers} proposeAnswers={props.proposeAnswers}/> :
                <View style={styles.containerSummary}>
                    <Text style={styles.question}>{props.question}</Text>
                    <ScrollView style={styles.listItems}>
                        {answers.map((item, i ) => <Text key={i} style={styles.listItem}>{item}</Text>)}
                    </ScrollView>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={checkCorrectAnswer} style={styles.correctButton}>
                            <Text style={styles.appButtonText}>Dobrze</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={checkIncorrectAnswer} style={styles.incorrectButton}>
                            <Text style={styles.appButtonText}>Źle</Text>
                        </TouchableOpacity>
                    </View>
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
    buttons: {
        flexDirection: 'row'
    },
    correctButton: {
        elevation: 8,
        backgroundColor: "#669900",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        width: 150
      },
      incorrectButton: {
        elevation: 8,
        backgroundColor: "#ff0000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        width: 150
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