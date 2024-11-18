import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View , ScrollView } from "react-native";


const Location=()=>{
    
    return(
         <ScrollView style={style.text}>
          
          <Image 
                style={{ height: 280, width: 280 ,alignSelf:'center' }}
                source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
                 />

         <TouchableOpacity onPress={() => { console.warn('State') }}>
           <View style={{ marginHorizontal: 15, marginTop: 50  }}>
           <Text style={style.text3}>State</Text>
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => { console.warn('District') }}>
           <View style={{ marginHorizontal: 15, marginTop: 20 }}>
           <Text style={style.text3}>District</Text>
           </View>
           </TouchableOpacity>
          
           <TouchableOpacity onPress={() => { console.warn('Submit Successfully') }}>
           <View style={{ marginHorizontal: 15, marginTop: 50 }}>
           <Text style={style.text4}>Submit</Text>
           </View>
           </TouchableOpacity>

        </ScrollView>
    )
}

export default Location;

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