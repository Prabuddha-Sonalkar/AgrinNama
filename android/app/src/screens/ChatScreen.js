import React, { useCallback, useEffect, useState } from 'react';//for chat 
import { StyleSheet, View, Text } from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import { GiftedChat, Actions } from 'react-native-gifted-chat';

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const userName = route.params.data.name;

  useEffect(() => {
    const subscriber = Firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const allMessages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const createdAt =
            firebaseData.createdAt && firebaseData.createdAt.toDate
              ? firebaseData.createdAt.toDate()
              : new Date();

          const message = {
            _id: doc.id,
            text: firebaseData.text,
            createdAt,
            user: {
              _id: firebaseData.user._id,
            },
          };

          return message;
        });

        setMessages(allMessages);
      });

    return () => subscriber();
  }, [route.params.id, route.params.data.userId]);

  const onSend = useCallback((newMessages = []) => {
    const msg = newMessages[0];
    const messageData = {
      ...msg,
      user: {
        _id: route.params.id,
      },
      createdAt: new Date(),
    };

    Firestore()
      .collection('chats')
      .doc(route.params.id + route.params.data.userId)
      .collection('messages')
      .add(messageData);

    Firestore()
      .collection('chats')
      .doc(route.params.data.userId + route.params.id)
      .collection('messages')
      .add(messageData);
  }, [route.params.id, route.params.data.userId]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: route.params.id,
        }}
        textInputStyle={{
          color: 'black',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#437d21',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;