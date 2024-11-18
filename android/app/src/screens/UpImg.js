import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { TextInput } from 'react-native-paper';

const UpImg = () => {

  
  const [imageUri, setImageUri] = useState(null);
  const [referenceNumber, setReferenceNumber] = useState('');

  const pickImage = () => {
    if (!referenceNumber) {
      console.warn('Reference number is required.');
      return;
    }

    launchImageLibrary({ quality: 0.5 }, async (response) => {
      if (response.assets) {
        const file = response.assets[0];
        const uploadUri = file.uri;
        const uniqueFileName = referenceNumber;

        const storageRef = storage().ref('images/' + uniqueFileName);

        try {
          await storageRef.putFile(uploadUri);
          const downloadURL = await storageRef.getDownloadURL();
          setImageUri(downloadURL);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    });
  };

  return (
    
    <View style={styles.container}>
      <Image
    style={{ height: 280, width: 280, alignSelf: 'center' ,marginBottom:-40,marginTop:-60}}
    source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
/>
      <Text style={styles.text}> Image Upload</Text>
      <TextInput
        label={'Reference number'}
        style={styles.referenceInput}
        mode='outlined'
        value={referenceNumber}
        onChangeText={(text) => setReferenceNumber(text)}
      />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      <Button title="Pick an Image" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#437d21',
  },
  referenceInput: {
    width: 300,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default UpImg;







































































