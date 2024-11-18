import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Admin = (props) => {
  const { navigation } = props;
  const [image, setImage] = useState(null)
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Signin");
  };



  const pickImeageAndUpload = () => {
    launchImageLibrary({ quality: 0.5 }, (fileobj) => {

      const uploadTask = storage().ref().child('/userprofile/ ${Date.now()}').putFile(fileobj.uri)
      uploadTask.on('state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) alert('imeage uploaded')
        },
        (error) => {
          alert("error uploding imeage")
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setImage(downloadURL)
          });
        }
      );
    }
    )
  }

  //
  return (
    <ScrollView style={style.text}>

      <Image
        style={{ height: 280, width: 280, alignSelf: 'center' }}
        source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
      />

      <TouchableOpacity onPress={() => { navigation.navigate("fillup") }}>
        <View style={{ marginHorizontal: 15, marginTop: 50 }}>
          <Text style={style.text3}>Survey</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate("Status") }}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={style.text3}>Survey Details</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate("Main") }}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={style.text3}>Chat</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate("Applicant") }}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={style.text3}>All Applicant</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={style.section} onPress={logout}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={style.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>



    </ScrollView>
  )
}

export default Admin;

const style = StyleSheet.create({
  text: {
    backgroundColor: 'white'
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
  },
  logoutText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    textAlign: 'right',
    marginTop: 5,


  },
  section: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: "gray",
    textAlign: 'Left',
    marginTop: 5,



  }
})