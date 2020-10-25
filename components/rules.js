import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function mainSite({navigation}) {
    return (
        <ScrollView>
            <Text style={styles.rulesText}>
            Cześć!{"\n"}
            Bardzo nam miło, że postanowiłeś zagrać w naszą grę! Jest to dopiero 
            wersja testowa dlatego, jeśli masz pomysł na pytania/poprawki itp. to 
            piszcie do nas na adres email: k.liwinski@gmail.com{"\n"}{"\n"}

            Zasady gry są bardzo proste i wszystko zamyka się w słynny ostatnio 
            powiedzeniu „+1… byczku”. Przed startem gry podzielcie się na dwie 
            drużyny – niebieskich i pomarańczowych. {"\n"}{"\n"}

            Po starcie gry dostaniecie pierwsze pytanie wraz z maksymalną liczbą 
            odpowiedzi. Po 10 sekundach wystartuje licytacja. Każda drużyna ma dwa 
            przyciski do dyspozycji. Przycisk podpisany kolorem drużyny służy do 
            podbicia ilości odpowiedzi, na które możecie wymienić, a przycisk 
            „VaBank” służy do zadeklarowania możliwości powiedzenia wszystkich 
            możliwych odpowiedzi. {"\n"}{"\n"}

            Po wygraniu licytacji przez drużynę startuje licznik oczekiwania na 
            wymienienie wszystkich odpowiedzi. Przycisk dobrej odpowiedzi klika 
            osoba wyznaczona z drużyny przeciwnej. Po upływie czasu lub wymienieniu 
            wszystkich poprawnych odpowiedzi wyświetla się lista wszystkich 
            możliwych odpowiedzi, proszę je respektować, żeby nie było niepotrzebnych
            kłótni. {"\n"}{"\n"}

            Na zakończenie drużyna przegrana dostaje karę po wykonaniu, której 
            startuje kolejne pytania, a cały proces gry się powtarza aż do 
            wyczerpania się pytań lub do rezygnacji którejś z drużyn. Życzymy
            miłej gry! 

            </Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    rulesText: {
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 20,
        paddingTop: 20,
        textAlign: 'justify'
    }
  });
