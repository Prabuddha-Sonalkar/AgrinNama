import React, { useEffect } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import {useNavigation} from '@react-navigation/native';


const Splash=()=>{
    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
         navigation.navigate('Choose');
        },900);
    },[]);

    

    return(
    <View style={Styles.container}>
      <Text style={Styles.logo}> 
                <Image 
                style={{ height: 250, width: 250  }}
                source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
                 />
                 
      </Text>
    </View>
    
  )
}
  

export default Splash;

const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white'
    },
    logo:{
        fontSize:60,
        alignSelf:'center',
        height:'100%',
        marginTop:360

}
})