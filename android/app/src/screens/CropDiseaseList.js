import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


    

const cropDiseaseData = [
    
  {
    id: '1',
    imageUri: 'https://tse4.mm.bing.net/th?id=OIP.GiZvqyynVtPa07KZ7cVIRAHaFB&pid=Api&P=0&h=180',
    name: 'Rice Blast',
    info: 'Rice Blast is a common and devastating fungal disease that affects rice crops in India. It leads to the formation of lesions on leaves, panicles, and grains, resulting in yield losses.',
  },
  {
    id: '2',
    imageUri: 'https://tse2.mm.bing.net/th?id=OIP.uHi5AXyBhVBB12czAqCh7gHaE9&pid=Api&P=0&h=180',
    name: 'Wheat Rust',
    info: 'Wheat Rust is a fungal disease that affects wheat crops. It manifests as yellow or orange pustules on leaves, reducing grain quality and yield.',
  },
  {
    id: '3',
    imageUri: 'https://www.croplifela.org/images/EN/articulos/48/Helicoverpa-foto4.jpg',
    name: 'Cotton Bollworm',
    info: 'Cotton Bollworm is a major pest of cotton crops. It damages cotton bolls, reducing fiber quality and cotton yield in India.',
  },
  {
    id: '4',
    imageUri: 'https://tse1.mm.bing.net/th?id=OIP.QooNISmxwq9_mR2zL7hm6gHaE8&pid=Api&P=0&h=180',
    name: 'Maize Downy Mildew',
    info: 'Maize Downy Mildew is a destructive disease affecting maize crops in India. It results in yellowing and wilting of leaves, impacting yield and quality.',
  },
  {
    id: '5',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.h68zIuwOqrle5dX9zjCSdgHaEK&pid=Api&P=0&h=180',
    name: 'Sugarcane Red Rot',
    info: 'Sugarcane Red Rot is a bacterial disease that affects sugarcane. It causes red discoloration of the plant, reduces sugar content, and affects crop productivity.',
  },
];

const { width } = Dimensions.get('window');
const imageWidth = width - 32;

const CropDiseaseList = () => {
  
  const renderItem = ({ item }) => (
    
    <View style={styles.listItem}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.cropName}>{item.name}</Text>
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
        data={cropDiseaseData}
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
  cropName: {
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

export default CropDiseaseList;