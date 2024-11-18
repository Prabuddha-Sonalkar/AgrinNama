
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const diseaseData = [
  {
    id: '1',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.ggCQMyBdKDy_A2V5_667VAHaD_&pid=Api&P=0&h=180',
    name: 'Foot-and-Mouth Disease (FMD)',
    info: 'Foot-and-Mouth Disease is a highly contagious viral disease that affects cattle, among other livestock. It causes fever, blisters on the mouth and hooves, and can lead to reduced milk production and weight loss. It is a significant concern for Indian cattle farmers.',
  },
  {
    id: '2',
    imageUri: 'https://tse4.mm.bing.net/th?id=OIP.yJArStQVtAeRzLG2xXXFAAHaE8&pid=Api&P=0&h=180',
    name: 'Rinderpest',
    info: 'Rinderpest is a viral disease that affects cattle and is characterized by high fever, oral and nasal discharge, and often leads to death. It used to be a major concern in India, but it has been globally eradicated.',
  },
  {
    id: '3',
    imageUri: 'https://tse1.mm.bing.net/th?id=OIP.0wypILBPKT8avGO5O1DWHwAAAA&pid=Api&P=0&h=180',
    name: 'Black Quarter (Blackleg)',
    info: 'Black Quarter is a bacterial disease that affects cattle and causes severe muscle swelling and toxemia. It is often fatal and can be prevented through vaccination. Indian cattle are at risk of this disease.',
  },
  {
    id: '4',
    imageUri: 'https://tse2.mm.bing.net/th?id=OIP.auUA50ERj9_Y6tUwHGjC3wHaFK&pid=Api&P=0&h=180',
    name: 'Hemorrhagic Septicemia (HS)',
    info: 'Hemorrhagic Septicemia is a bacterial disease that primarily affects cattle and buffalo. It leads to high fever, respiratory distress, and sudden death.',
  },
  {
    id: '5',
    imageUri: 'https://tse4.mm.bing.net/th?id=OIP.m8_qANoY5-7Pklc3YPQJMgHaEK&pid=Api&P=0&h=180',
    name: 'Mastitis',
    info: 'Mastitis is an inflammation of the udder in dairy cows. It can be caused by various bacteria and results in reduced milk production and poor milk quality. Mastitis is a common problem in the dairy industry in India, impacting milk production.',
  },
];

const { width } = Dimensions.get('window');
const imageWidth = width - 32;

const CattleDiseaseList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.diseaseName}>{item.name}</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imageUri }}
          style={[styles.image, { width: imageWidth, height: imageWidth }]}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.info}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={diseaseData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItem: {
    padding: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  list: {
    paddingHorizontal: 16,
  },
  diseaseName: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    marginBottom: 8,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  infoText: {
    color: 'black',
    fontSize: 14,
  },
});

export default CattleDiseaseList;