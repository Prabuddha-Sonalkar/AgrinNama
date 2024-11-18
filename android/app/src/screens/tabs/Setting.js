import React, { useState, useEffect } from "react";//for chat 
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const name = await AsyncStorage.getItem("NAME");
      setUserName(name || "");
    };
    fetchUserInfo();

  }, []);

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Signin");
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User</Text>
        <Text style={styles.userInfo}>{userName}</Text>
      </View>
      <TouchableOpacity style={styles.section} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#437d21",
    fontSize: 30,
    fontWeight: "900",
  },
  section: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  sectionTitle: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    color: "black",
  },
  logoutText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});
