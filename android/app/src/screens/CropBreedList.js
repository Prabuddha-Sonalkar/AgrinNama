import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const cropData = [
  {
    id: '1',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.udRdtkZJUg2czKGwqqGtTgHaFi&pid=Api&P=0&h=180',
    name: 'Wheat',
    info: 'Wheat is one of the staple crops in India. It is widely cultivated in the northern regions of the country and is a significant source of food and income for farmers.',
  },
  {
    id: '2',
    imageUri: 'https://tse2.mm.bing.net/th?id=OIP.k25apSjbIPhKeDuq0tR_ZQHaE8&pid=Api&P=0&h=180',
    name: 'Rice',
    info: 'Rice is the primary crop in many parts of India, especially in the eastern and southern regions. It is a major dietary staple for the Indian population.',
  },
  {
    id: '3',
    imageUri: 'https://i.pinimg.com/originals/1b/3c/3d/1b3c3dbe78742a419bdae65e0c672abb.jpg',
    name: 'Cotton',
    info: 'Cotton is an important cash crop in India. It is grown in various states and is a key raw material for the textile industry.',
  },
  {
    id: '4',
    imageUri: 'https://tse4.mm.bing.net/th?id=OIP.o8PQK0zQblAiUJkaSTYEhAHaE8&pid=Api&P=0&h=180',
    name: 'Sugarcane',
    info: 'Sugarcane is a major commercial crop in India, primarily cultivated for sugar production. It is grown in many states, and India is one of the largest sugar producers in the world.',
  },
  {
    id: '5',
    imageUri: 'https://tse1.mm.bing.net/th?id=OIP.1gt64Umor0xiXuOS-SseJwHaFU&pid=Api&P=0&h=180',
    name: 'Maize (Corn)',
    info: 'Maize, or corn, is grown in various parts of India and serves as both a staple food and animal feed. It has a wide range of uses, from food products to industrial applications.'
  },
];

const { width } = Dimensions.get('window');
const imageWidth = width - 32;

const CropBreedList = () => {
    
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
        data={cropData}
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

export default CropBreedList;