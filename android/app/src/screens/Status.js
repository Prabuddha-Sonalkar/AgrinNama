
import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import storage from '@react-native-firebase/storage';

const DisplayData = () => {
  const [aadharInput, setAadharInput] = useState("");
  const [referenceInput, setReferenceInput] = useState("");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(""); // State to store query text
  const [imageUri, setImageUri] = useState(null);
  const [showQuery, setShowQuery] = useState(false); // State to control query display

  const fetchData = async () => {
    if (aadharInput && referenceInput) {
      const snapshot = await firestore()
        .collection("Application")
        .where("aaddhar", "==", aadharInput)
        .where("reference", "==", referenceInput)
        .get();
      const dataList = snapshot.docs.map(doc => doc.data());
      setData(dataList);

      //Retrieve the image based on the reference number
      const imageRef = storage().ref(`images/${referenceInput}`);
      imageRef.getDownloadURL()
        .then((url) => {
          setImageUri(url);
        })
        .catch((error) => {
          setImageUri(null);
          console.error('Error fetching image:', error);
        });

      //Fetch query text based on Aadhar number
      const querySnapshot = await firestore()
        .collection("queries")
        .doc(aadharInput) // Assuming Aadhar number is the document ID
        .get();
      if (querySnapshot.exists) {
        setQuery(querySnapshot.data().query);
        setShowQuery(true);
      } else {
        setQuery("No query found for this Aadhar number.");
        setShowQuery(false);
      }
    }
  };

  useEffect(() => {
    const initialImageRef = storage().ref('images/initialImage.jpg');
    initialImageRef.getDownloadURL().then((url) => {
      setImageUri(url);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <Image
        style={{ height: 280, width: 280, alignSelf: 'center' }}
        source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
      />
       <Text style={{ fontSize: 25, textAlign: 'center', margin: 20, color: '#59A52C' }}>
         Status Check-In
       </Text>
       <TextInput label={'Aadhar Card Number'} style={style.text5}
        mode='outlined'
        value={aadharInput}
        onChangeText={text => setAadharInput(text)}
      />
      <TextInput label={'Reference No'} style={style.text5}
        mode='outlined'
        value={referenceInput}
        onChangeText={text => setReferenceInput(text)}
      />
        <TouchableOpacity onPress={fetchData}>
         <View style={style.buttonContainer}>
         <Text style={style.text8}>Retrieve Status</Text>
         </View>
        </TouchableOpacity>
      {data.length > 0 && (
        <View style={style.container}>
          {imageUri && <Image source={{ uri: imageUri }} style={style.image} />}
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <Text style={style.text5}>   Account No: {item.account}</Text>
                <Text style={style.text5}>   Farmer Name: {item.farmer}</Text>
                <Text style={style.text5}>   Aadhar Card No: {item.aaddhar}</Text>
                <Text style={style.text5}>   Mobile No: {item.cell}</Text>
                <Text style={style.text5}>   Bank Account Number: {item.account}</Text>
                <Text style={style.text5}>   Ifsc Code: {item.ifsc}</Text>
                <Text style={style.text5}>   Total Area: {item.tarea}</Text>
                <Text style={style.text5}>   Affected Area : {item.affected}</Text>
                <Text style={style.text5}>   Reference No: {item.reference}</Text>
              </View>   
            )}
          />
           {showQuery && (
            <View style={style.queryContainer}>
               <Text style={style.queryTitle}>Query:</Text>
               <Text style={style.queryText}>{query}</Text>
             </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default DisplayData;

const style = StyleSheet.create({
  text5: {
    paddingVertical: '-1%',
    width: 330,
    alignSelf: 'center',
    marginTop: 15,
    color: 'black',
    fontFamily: 'Montserrat-Medium',
  },
  text8: {
    marginTop: 20,
    marginHorizontal:13,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#437d21',
    fontFamily: 'Montserrat-Regular',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  queryContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  queryTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  queryText: {
    fontSize: 16,
    color: 'black',
  },
  container: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginTop: 20,
  },
});