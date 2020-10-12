import React, { useEffect, useState } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar } from 'react-native'
import Dalej from './dalej.js';
import questions from './questions.js';

export default function Auctions(props) {

    const [timeLeft, setTimeLeft] = useState(10);
    const [endTime, setEndTime] = useState(false);
    const [winTeam, setWinTeam] = useState('');
    const [proposeAnswersSummary, setProposeAnswersSummary] = useState(0)
    const [proposeAnswersFirstTeam, setProposeAnswersFirstTeam] = useState(0)
    const [proposeAnswersSecondTeam, setProposeAnswersSecondTeam] = useState(0)
    const [randomIndex, setRandomIndex] = useState(0)
    const [questionsArray, setQuestionsArray] = useState(questions)
    
    //let questionsArray = questions;

    function resetCounter() {
        setTimeLeft(10);
        setProposeAnswersSummary(proposeAnswersSummary + 1);
        if (maxAnswers <= proposeAnswersFirstTeam +1 || maxAnswers <= proposeAnswersSecondTeam +1){
            return setEndTime(true)
        }
    }

    function firstTeamBind() {
        setWinTeam('firstTeam');
        setProposeAnswersFirstTeam(proposeAnswersSummary + 1);
        resetCounter();
    }

    function secondTeamBind() {
        setWinTeam('secondTeam');
        setProposeAnswersSecondTeam(proposeAnswersSummary + 1);
        resetCounter();
    }

    function firstTeamVabank() {
        setWinTeam('firstTeam');
        setProposeAnswersSummary(maxAnswers);
        return setEndTime(true)
    }

    function secondTeamVabank() {
        setWinTeam('secondTeam');
        setProposeAnswersSummary(maxAnswers)
        return setEndTime(true)
    }

    useEffect(() => {
        if (!timeLeft) {
            return setEndTime(true)
        }

        setRandomIndex(Math.floor(Math.random() * questions.length ))
        
        setQuestionsArray(questionsArray.filter((item) => item.id !== randomIndex))

        const intervalId = setInterval(() => {
        //setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    let maxAnswers = questionsArray[randomIndex].avalibleAnswers;
    
    console.log(questionsArray.length);

    return (
        <View>
            {
                endTime ? <Dalej winTeam={winTeam} proposeAnswers={proposeAnswersSummary} question={questionsArray[randomIndex].question} answers={questionsArray[randomIndex].answers}/> :
                    <View style={styles.auctionContainer}>
                        <View>
                            <TouchableOpacity onPress={firstTeamVabank} style={[styles.appButtonContainer, styles.firstTeam]}>
                                <Text style={styles.appButtonText}>Vabank</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={firstTeamBind} style={[styles.appButtonContainer, styles.firstTeam]}>
                                <Text style={styles.appButtonText}>Niebiescy</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.results}>
                            <Text style={styles.question}>{questionsArray[randomIndex].question}</Text>
                            <Text style={[styles.result, styles.resultBorderFirstTeam]}>{proposeAnswersFirstTeam}/{maxAnswers}</Text>
                            <Text style={styles.result}>{timeLeft}</Text>
                            <Text style={[styles.result, styles.resultBorderSecondTeam]}>{proposeAnswersSecondTeam}/{maxAnswers}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={secondTeamBind} style={[styles.appButtonContainer, styles.secondTeam]}>
                                <Text style={styles.appButtonText}>Pomarańczowi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={secondTeamVabank} style={[styles.appButtonContainer, styles.secondTeam]}>
                                <Text style={styles.appButtonText}>Vabank</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  
            }
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        width: 70,
        height: 70,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#303036',
        borderWidth: 5,
        marginHorizontal: 20
    },
    resultBorderFirstTeam: {
        borderColor: '#30BCED'
    },
    resultBorderSecondTeam: {
        borderColor: '#FC5130'
    },
    wonTeam: {
        borderWidth: 5,
        width: 120,
        borderColor: '#009688',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    results: {
        flexDirection: 'row',
        borderColor: '#009688',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    auctionContainer: {
        height: "100%",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appButtonContainer: {
        elevation: 8,
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
      question: {
          width: '100%',
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 40
      },
      firstTeam: {
        backgroundColor: '#30BCED'
      },
      secondTeam: {
          backgroundColor: '#FC5130'
      }
  });