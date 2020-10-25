import React, { useEffect, useState } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar, Alert } from 'react-native'
import Answers from './answers.js';
import questions from './questions.js';
import WaitingRoom from './waitingRoom.js';

export default function Auctions(props) {

    const [timeLeft, setTimeLeft] = useState(15);
    const [endTime, setEndTime] = useState(false);
    const [winTeam, setWinTeam] = useState('');
    const [proposeAnswersSummary, setProposeAnswersSummary] = useState(0)
    const [proposeAnswersFirstTeam, setProposeAnswersFirstTeam] = useState(0)
    const [proposeAnswersSecondTeam, setProposeAnswersSecondTeam] = useState(0)
    const [randomIndex, setRandomIndex] = useState(0)
    const [actualQuestion, setActualQuestion] = useState('')
    const [questionAnswers, setQuestionAnswers] = useState([])
    const [waitTime, setWaitTime] = useState(true)
    //const [questionsArray, setQuestionsArray] = useState(questions)
    
    let questionsArray = questions;

    function resetCounter() {
        setTimeLeft(10);
        setProposeAnswersSummary(proposeAnswersSummary + 1);
        if (maxAnswers <= proposeAnswersFirstTeam +1 || maxAnswers <= proposeAnswersSecondTeam +1){
            return setEndTime(true)
        }
    }

    function firstTeamBind() {
        setWinTeam('Niebiescy');
        setProposeAnswersFirstTeam(proposeAnswersSummary + 1);
        resetCounter();
    }

    function secondTeamBind() {
        setWinTeam('Pomarańczowi');
        setProposeAnswersSecondTeam(proposeAnswersSummary + 1);
        resetCounter();
    }

    function firstTeamVabank() {
        setWinTeam('Niebiescy');
        setProposeAnswersSummary(maxAnswers);
        setActualQuestion(questionsArray[randomIndex].question)
        setQuestionAnswers(questionsArray[randomIndex].answers)
        setEndTime(true)
        return questionsArray.splice(randomIndex, 1)
    }

    function secondTeamVabank() {
        setWinTeam('Pomarańczowi');
        setProposeAnswersSummary(maxAnswers)
        setActualQuestion(questionsArray[randomIndex].question)
        setQuestionAnswers(questionsArray[randomIndex].answers)
        setEndTime(true)
        return questionsArray.splice(randomIndex, 1)
    }

    //let randomIndex = Math.floor(Math.random() * questionsArray.length);
    
    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * (questionsArray.length - 1) ))
    }, [randomIndex])

    useEffect(() => {
        if (!timeLeft) {
            if(proposeAnswersSummary){
                setActualQuestion(questionsArray[randomIndex].question)
                setQuestionAnswers(questionsArray[randomIndex].answers)
                setEndTime(true)
                questionsArray.splice(randomIndex, 1)
                return () => clearInterval(intervalId);
            } else {
                Alert.alert(
                    'Nikt nie zgłosił chęci odpowiedzi!',
                    'Która z drużyn podbija stawke?',
                    [
                      {
                        text: 'Niebiescy',
                        onPress: () => firstTeamBind()
                      },
                      { text: 'Pomarańczowi', 
                        onPress: () => secondTeamBind() }
                    ],
                    { cancelable: false }
                  );
                return () => clearInterval(intervalId);
            }
            
        }

        if(questionsArray.length < 2){
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                  {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
        }
        
        //setQuestionsArray(questionsArray.filter((item) => item.id !== randomIndex))

        if(endTime === true){
            return clearInterval(intervalId);
        }

        if(timeLeft < 11){
            setWaitTime(false)
        }

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    let maxAnswers = questionsArray[randomIndex].avalibleAnswers;

    return (
        <View>
            {
                endTime ? <Answers winTeam={winTeam} proposeAnswers={proposeAnswersSummary} question={actualQuestion} answers={questionAnswers}/> :
                    waitTime ? 
                    <WaitingRoom question={questionsArray[randomIndex].question} maxAnswers={maxAnswers}/>
                    :     
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
      },
      waitingRoom: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      waitingRoomHeader: {
          fontWeight: 'bold',
          fontSize: 34
      }
  });
