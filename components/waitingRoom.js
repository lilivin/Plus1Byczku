import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function waitingRoom(props) {
    return (
        <View style={styles.waitingRoom}>
            <Text style={styles.waitingRoomHeader}>Przygotuj się!</Text>
            <Text style={styles.question}>{props.question}</Text>
            <Text>Możliwych odpowiedzi: {props.maxAnswers}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
      question: {
          width: '100%',
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 40
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
