import React from "react";//for chat 
import { Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {useState} from 'react';
// import Users from "../tabs/Users";
// import Setting from "../tabs/Setting";
import Users from "./tabs/Users";
import Setting from "./tabs/Setting";
const Main=()=>{
    const [selectedTab,setSelectedTab]=useState(0);
    return(
       <View style={Styles.container}>
        {selectedTab == 0 ? (<Users/>) : (<Setting/>)}
        <View style={Styles.bottomTab}>
            <TouchableOpacity style={Styles.tab} onPress={()=>{
                setSelectedTab(0);
            }}>
                <Image 
                style={[Styles.tabIcon,{tintColor:selectedTab==0 ? 'white' : 'gray' }]}
                source={{ uri: 'https://icon-library.com/images/login-icon-png/login-icon-png-2.jpg' }}
                 />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.tab} onPress={()=>{
                setSelectedTab(1);
            }}>
                <Image
                style={[Styles.tabIcon,{tintColor:selectedTab==1 ? 'white' : 'gray' }]}
                source={{ uri: 'https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png' }}
                 />
            </TouchableOpacity>
            
           
        </View>
       </View>
    );
};

export default Main;

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    bottomTab:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:70,
        backgroundColor:'#437d21',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    tab:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    tabIcon:{
        width:30,
        height:30
    }
})