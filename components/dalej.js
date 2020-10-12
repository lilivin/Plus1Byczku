import React, { useState, useEffect } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar } from 'react-native'
import RoundSummary from './roundSummary'

export default function dalej(props) {
    const [timeLeft, setTimeLeft] = useState(10);
    const [endTime2, setEndTime2] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [allAnswers, setAllAnswers] = useState('lose')

    function addCorrectAnswer() {
        setCorrectAnswers(correctAnswers + 1)
        if (correctAnswers === props.proposeAnswers - 1) {
            setAllAnswers('win')
            return setEndTime2(true)
        }
    }

    useEffect(() => {
        if (!timeLeft) {
            return setEndTime2(true)
        }

        //const intervalId = setInterval(() => {
        //setTimeLeft(timeLeft - 1);
        //}, 1000);

        //return () => clearInterval(intervalId);
    }, [timeLeft]);


    return (
        <View>
            {endTime2 ? <RoundSummary allAnswers={allAnswers} answers={props.answers} question={props.question} winTeam={props.winTeam}/> :
            <View style={styles.container}>
                <Text style={props.winTeam === 'firstTeam' ? styles.wonTeamFirstTeam : styles.wonTeamSecondTeam}>{props.winTeam}</Text>
                <Text style={styles.question}>{props.question}</Text>
                <Text style={props.winTeam === 'firstTeam' ? styles.resultFirstTeam : styles.resultSecondTeam}>{timeLeft}</Text>
                <Text style={props.winTeam === 'firstTeam' ? styles.resultFirstTeam : styles.resultSecondTeam}>{correctAnswers}/{props.proposeAnswers}</Text>
                <TouchableOpacity onPress={addCorrectAnswer} style={props.winTeam === 'firstTeam' ? styles.appButtonContainerFirstTeam : styles.appButtonContainerSecondTeam}>
                    <Text style={styles.appButtonText}>Dobra odpowiedź!</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        width: 300,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      resultFirstTeam: {
        width: 70,
        height: 70,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#30BCED',
        borderWidth: 5,
        marginHorizontal: 20,
        marginVertical: 20
    },
    resultSecondTeam: {
        width: 70,
        height: 70,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#FC5130',
        borderWidth: 5,
        marginHorizontal: 20,
        marginVertical: 20
    },
    wonTeamFirstTeam: {
        borderBottomWidth: 3,
        borderColor: "#30BCED",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        width: 300,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#30BCED',
        textTransform: 'uppercase'
    },
    wonTeamSecondTeam: {
        borderBottomWidth: 3,
        borderColor: "#FC5130",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        width: 300,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FC5130',
        textTransform: 'uppercase'
    },
    question: {
        width: 350,
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 40
    }
  });