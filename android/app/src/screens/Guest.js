import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, ScrollView, Linking } from "react-native";


const Guest = (props) => {
    const { navigation } = props;

    return (
        <ScrollView style={style.text}>


            <Image
                style={{ height: 280, width: 280, alignSelf: 'center' }}
                source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
            />

            {/* <Text style={style.text2}>Welcome...</Text> */}

            <TouchableOpacity onPress={() => { navigation.navigate("Cattles") }}>
                <View style={{ marginHorizontal: 15, marginTop: -50 }}>
                    <Text style={style.text3}>Cattles</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Crops") }}>
                <View style={{ marginHorizontal: 15, marginTop: -10 }}>
                    <Text style={style.text3}>Crops</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { Linking.openURL('https://krishi.maharashtra.gov.in/Site/Information/DisplayGuideLines.aspx?MenuID=1143') }}>
                <View style={{ marginHorizontal: 15, marginTop: -10 }}>
                    <Text style={style.text3}>Online Policy</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { Linking.openURL('https://bhulekh.mahabhumi.gov.in/') }}>
                <View style={{ marginHorizontal: 15, marginTop: -10 }}>
                    <Text style={style.text3}>Online 7/12</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("query") }}>
                <View style={{ marginHorizontal: 15, marginTop: 0 }}>
                    <Text style={style.text3}>Raise Agriculture Issues</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Status") }}>
                <View style={{ marginHorizontal: 15, marginTop: 0 }}>
                    <Text style={style.text3}>Survey Details</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Weather") }}>
                <View style={{ marginHorizontal: 15, marginTop: 0 }}>
                    <Text style={style.text3}>Weather Details</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Guest;

const style = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        

    },
    text1: {
        width: 270,
        height: 190,
        marginTop: 50,
        alignSelf: 'center'
    },
    text2: {
        fontSize: 25,
        color: '#196619',
        marginStart: 10,
        marginTop: 80,
        fontFamily: 'Montserrat-Bold'

    },
    text3: {
        marginTop: 50,
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#59A52C',
        fontFamily: 'Montserrat-Regular',
        padding: 10

    },
    text4: {
        marginTop: 100,
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#437d21',
        fontFamily: 'Montserrat-Regular',
        padding: 10

    }
})