import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.sDibMqjg6Qk8V9NMTN_24AHaE9&pid=Api&P=0&h=180',
    breed: 'Holstein-Friesian',
    info: 'The Holstein-Friesian is a breed of dairy cattle known for its distinctive black-and-white coat. It is one of the most common dairy breeds worldwide. They originated in the Netherlands and are known for their high milk production.',
  },
  {
    id: '2',
    imageUri: 'https://e-farming.in/wp-content/uploads/2022/06/milk-jersey-milk-cow-4583152.jpg',
    breed: 'Jersey',
    info: 'The Jersey is a small breed of dairy cattle known for its high-quality milk. They are often light brown or fawn in color. Jerseys are originally from the Channel Island of Jersey and are known for their friendly temperament.',
  },
  {
    id: '3',
    imageUri: 'https://tse2.mm.bing.net/th?id=OIP.CjaruDixChMBh1KH2b-kowHaFZ&pid=Api&P=0&h=180',
    breed: 'Gir',
    info: 'The Gir is an Indian breed of cattle known for its hump and distinctive appearance. It is well-adapted to the hot and humid climate of India. Gir cattle are primarily used for milk production and are sacred in Hinduism.',
  },
  {
    id: '4',
    imageUri: 'https://tse4.mm.bing.net/th?id=OIP.UVvLIz_yhr_53VEeePsccAHaDt&pid=Api&P=0&h=180',
    breed: 'Sahiwal',
    info: 'The Sahiwal is another Indian breed of cattle, known for its heat tolerance and milk production. It is usually reddish-brown in color. Sahiwal cattle are well-suited for tropical climates and are used for both milk and meat production.',
  },
  {
    id: '5',
    imageUri: 'https://tse1.mm.bing.net/th?id=OIP.LJJjBQPpedqODUk6SmnpAgHaE8&pid=Api&P=0&h=180',
    breed: 'Murrah',
    info: 'The Murrah is a breed of water buffalo found in India. It is known for its high milk yield and is often used for dairy farming. Murrah buffaloes are black in color and are highly valued for their milk quality and quantity.',
  },

];

const { width } = Dimensions.get('window');
const imageWidth = width - 32;

const CattleBreedList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.breedText}>{item.breed}</Text>
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
        data={data}
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
  breedText: {
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

export default CattleBreedList;