import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
const Crops = (props) => {
    const { navigation } = props;
    return (
        <View style={style.text}>


            <Image
                style={{ height: 280, width: 280, alignSelf: 'center' ,marginBottom:-30}}
                source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
            />

            <TouchableOpacity onPress={() => { navigation.navigate("Guest") }}>
                <Image
                    style={{ height: 280, width: 280, alignSelf: 'center' }}
                    source={{ uri: 'https://i.ibb.co/BGcSYgt/farmer-removebg-preview.png' }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate("Signin") }}>
                <Image
                    style={{ height: 200, width: 200, alignSelf: 'center' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4lCl9qtbOUIzIIVaLG5DQeP1r5KjynU6Yg&usqp=CAU' }}
                />
            </TouchableOpacity>

        </View>
    )
}

export default Crops;

const style = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        flex:1

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
