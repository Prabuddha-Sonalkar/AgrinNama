import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View , ScrollView } from "react-native";
const Crops=(props)=>{
    const {navigation}=props;
    return(
         <ScrollView style={style.text}>
          
         
          <Image 
                style={{ height: 280, width: 280 ,alignSelf:'center' }}
                source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
                 />

         <TouchableOpacity onPress={() => { navigation.navigate("CropBreedList")}}>
           <View style={{ marginHorizontal: 15, marginTop: 50  }}>
           <Text style={style.text3}>Crops Breeds</Text>
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => { navigation.navigate("CropDiseaseList")  }}>
           <View style={{ marginHorizontal: 15, marginTop: 30 }}>
           <Text style={style.text3}>Crops Disease</Text>
           </View>
           </TouchableOpacity>

        </ScrollView>
    )
}

export default Crops;

const style=StyleSheet.create({
    text:{
       backgroundColor:'white',
       
    },
    text1:{
        width:270, 
        height:190, 
        marginTop:50,
        alignSelf:'center'
    },
    text2:{
        fontSize:25,
        color:'#196619',
        marginStart:10,
        marginTop:80,
        fontFamily:'Montserrat-Bold'
       
    },
    text3:{
        marginTop: 50,
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#59A52C',
        fontFamily:'Montserrat-Regular',
        padding:10
       
    },
    text4:{
        marginTop: 100,
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#437d21',
        fontFamily:'Montserrat-Regular',
        padding:10
        
    }
})