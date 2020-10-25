import React from 'react'
import { StyleSheet ,View, Text, Button, TouchableOpacity, StatusBar, Alert, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function mainSite({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/Logo.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Auctions')} style={[styles.appButtonContainer, styles.secondTeam]}>
                <Text style={styles.appButtonText}>Gra</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Rules')} style={[styles.appButtonContainer, styles.secondTeam]}>
                <Text style={styles.appButtonText}>Zasady</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    appButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        backgroundColor: '#001f3f',
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
      }
  });
