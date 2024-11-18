// import { useEffect, useState } from "react";
// import React from "react";
// import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
// import Firestore from '@react-native-firebase/firestore';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { FlatList } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";
// // 
// let id = '';
// // 
// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const navigation = useNavigation();
// // 
//   useEffect(() => {
//     getUsers();
//   }, []);
// // 
//   const getUsers = async () => {
//     id = await AsyncStorage.getItem('USERID');
//     let tempData = [];
//     const email = await AsyncStorage.getItem('EMAIL');
//     Firestore()
//       .collection("users")
//       .where('email', '!=', email)
//       .get()
//       .then(res => {
//         if (res.docs != []) {
//           res.docs.map(item => {
//             tempData.push(item.data());
//           });
//         }
//         setUsers(tempData);
//       });
//   };
// // 
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Chat App</Text>
//       </View>
//       <FlatList data={users} renderItem={({ item, index }) => {
//         return (
//           <TouchableOpacity style={styles.userItem} onPress={() => {
//             navigation.navigate("Chat", { data: item, id: id });
//           }}>
//             <Image source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }} style={styles.userIcon} />
//             <Text style={styles.name}>{item.name}</Text>
//           </TouchableOpacity>
//         );
//       }} />
//     </View>
//   );
// };
// // 
// export default Users;
// // 
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1
//   },
//   header: {
//     width: '100%',
//     height: 60,
//     backgroundColor: 'white',
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     color: 'purple',
//     fontSize: 30,
//     fontWeight: '900'
//   },
//   userItem: {
//     width: Dimensions.get('window').width - 50,
//     alignSelf: 'center',
//     marginTop: 20,
//     flexDirection: 'row',
//     height: 60,
//     borderWidth: .5,
//     borderRadius: 10,
//     paddingLeft: 10,
//     alignItems: 'center'
//   },
//   userIcon: {
//     width: 40,
//     height: 40
//   },
//   name: {
//     color: 'purple',
//     marginLeft: 20,
//     fontSize: 20
//   }
// });




import { useEffect, useState } from "react";//for chat 
import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

let id = '';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    id = await AsyncStorage.getItem('USERID');
    let tempData = [];
    const email = await AsyncStorage.getItem('EMAIL');
    Firestore()
      .collection("users") // Updated collection name to "Users"
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs != []) {
          res.docs.map(item => {
            tempData.push(item.data());
          });
        }
        setUsers(tempData);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GovAgri Chat</Text>
      </View>
      <FlatList data={users} renderItem={({ item, index }) => {
        return (
          <TouchableOpacity style={styles.userItem} onPress={() => {
            navigation.navigate("ChatScreen", { data: item, id: id });
          }}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNvhtsU55JKtfSiOzoOF5oLYAV86ls41QKQ&usqp=CAU ' }} style={styles.userIcon} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        );
      }} />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#437d21',
    fontSize: 30,
    fontWeight: '900'
  },
  userItem: {
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 60,
    borderWidth: .5,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center'
  },
  userIcon: {
    width: 40,
    height: 40
  },
  name: {
    color: '#437d21',
    marginLeft: 20,
    fontSize: 20
  }
});

























































































