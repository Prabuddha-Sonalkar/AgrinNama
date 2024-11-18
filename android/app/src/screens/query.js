import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import Firestore from '@react-native-firebase/firestore';

const Query = (props) => {
  const { navigation } = props;
  const [adharNumber, setAdharNumber] = useState(""); // State to store Adhar number
  const [status, setStatus] = useState(""); // State to store Status

  const handleSubmit = () => {
    if (adharNumber && status) {
      // Reference to the Firestore collection (change "queries" to your collection name)
      const queryCollection = Firestore().collection("queries");
      // Create a new document with adharNumber as the unique ID
      queryCollection.doc(adharNumber).set({
        query: status,
      })
        .then(() => {
          console.log("Document successfully written!");
          Alert.alert("Successful", "Query submitted successfully!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          Alert.alert("Error", "An error occurred while submitting the query. Please try again.");
        });

    } else {
      console.warn("Adhar number and status are required.");
      Alert.alert("Wrong", "Adhar number and status are required.");
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg' }}
      />
      <TextInput
        label={'Aadhar number'}
        style={styles.input}
        mode='outlined'
        value={adharNumber}
        onChangeText={(text) => setAdharNumber(text)}
      />
      <TextInput
        label={'Query'}
        style={styles.input}
        mode='outlined'
        multiline={true}
        numberOfLines={5}
        value={status}
        onChangeText={(text) => setStatus(text)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Query;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    height: 280,
    width: 280,
    alignSelf: 'center',
  },
  input: {
    width: 330,
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
  },
  button: {

    marginHorizontal:26,
    marginTop: 50,
    backgroundColor: '#437d21',
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});
