import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firestore from '@react-native-firebase/firestore';

const Applicant = (props) => {
    const {navigation}=props;
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const applicantCollection = await firestore()
          .collection("Application")
          .get();

        const applicantData = applicantCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setApplicants(applicantData);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>All Applicants Information</Text>
      <FlatList
        data={applicants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.applicantCard}>
            <Text style={styles.applicantText}>Name: {item.farmer}</Text>
            <Text style={styles.applicantText}>Aadhar Card: {item.aaddhar}</Text>
            <Text style={styles.applicantText}>Mobile No: {item.cell}</Text>
            <Text style={styles.applicantText}>Reference No: {item.reference}</Text>
            {/* Include other applicant information fields as needed */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "black",
    // backgroundColor: "#59A52C"
  },
  applicantCard: {
    backgroundColor: '#59A52C',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  applicantText: {
    fontSize: 16,
    color: "black",
  },
});

export default Applicant;
