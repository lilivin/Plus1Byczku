import React, { useState, useEffect } from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar, FlatList, ScrollView } from 'react-native'
import Auctions from './auctions.js';
import { useNavigation } from '@react-navigation/native';

export default function punishmentSectionWon(props) {
    const navigation = useNavigation(); 
    const [endTime, setEndTime] = useState(false);

    function resetFunction() {
        setEndTime(true);
    }

    return (
        <View>
            {endTime ? <Auctions /> :
                <View style={styles.containerSummary}>
                    <Text style={styles.header}>Przegrana</Text>
                    <Text style={styles.punishment}><Text style={styles.boldText}>Kara: </Text>Każdy z drużyny pije kieliszek wódeczki.</Text>
                    <TouchableOpacity onPress={resetFunction} style={styles.button}>
                        <Text style={styles.appButtonText}>Kolejna licytacja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                        <Text style={styles.appButtonText}>Menu</Text>
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
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        borderBottomWidth: 3,
        borderColor: "#ff0000",
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        width: 300,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff0000',
        textTransform: 'uppercase'
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        elevation: 8,
        backgroundColor: "#ff0000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        width: 300
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      boldText: {
          fontWeight: 'bold'
      },
      punishment: {
          fontSize: 15,
          marginVertical: 30
      }
  });