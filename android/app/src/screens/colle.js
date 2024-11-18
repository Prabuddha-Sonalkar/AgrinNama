import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const colle = ({ route }) => {
  const { aadharInput, referenceInput } = route.params;
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>Status Result</Text>
     <Text style={styles.text}>Aadhar Card Number: {aadharInput}</Text>
     <Text style={styles.text}>Reference No: {referenceInput}</Text>
     <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultContainer}>
             <Text style={styles.resultText}>Account No: {item.account}</Text>
             <Text style={styles.resultText}>Farmer Name: {item.farmer}</Text>
             <Text style={styles.resultText}>Aadhar Card No: {item.aaddhar}</Text>
             <Text style={styles.resultText}>Mobile No: {item.cell}</Text>
             <Text style={styles.resultText}>Bank Account Number: {item.account}</Text>
             <Text style={styles.resultText}>Ifsc Code: {item.ifsc}</Text>
             <Text style={styles.resultText}>Total Area: {item.tarea}</Text>
             <Text style={styles.resultText}>Affected Area: {item.affected}</Text>
             <Text style={styles.resultText}>Reference No: {item.reference}</Text>
           </View>
        )}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: 'black',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  resultContainer: {
    marginBottom: 10,
   
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5

  },
});

export default colle;