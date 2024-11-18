import React,{useEffect,useState} from "react";
import { Image, TouchableOpacity, StyleSheet,Text, View , ScrollView, Alert,StatusBar,FlatList} from "react-native";
import {TextInput} from "react-native-paper";
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';


import auth from "@react-native-firebase/auth";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const Fillup=(props)=> {
    const {navigation}=props;
    const [selectImage,setselectImage]=useState('')
    const [account,setAccount] = useState('');
    const [farmer,setFarmer] = useState('');
    const [aaddhar,setAaddhar] = useState('');
    const [cell,setCell] = useState('');
    const [bank,setBank] = useState('');
    const [ifsc,setIfse] = useState('');
    const [tarea,setTarea] = useState('');
    const [affected,setAffected] = useState('');
    const [reference,setReference] = useState('');
    const ImagePicker = async () => {
        let options = {
            storageOptions: {
                path: "image"
            }
        };
        launchImageLibrary(options, response => {
            setselectImage(response.assets[0].uri)
            console.log(response.assets[0].uri);
        });
        }
        

        const Application = async () => {
        //for fire store 
        if(account.length == 11 && farmer.length > 0 && aaddhar.length == 12 && cell.length==10){  //condition of survey form
            
             account, 
             farmer,
             aaddhar, 
             cell,
             bank, 
             ifsc,
             tarea,
             affected,
             reference
          
           

        
    const useData = {
        account : account,
        farmer : farmer,
        aaddhar :aaddhar,
        cell  : cell,
        bank  : bank,
        ifsc  :ifsc,
        tarea : tarea,
        affected : affected,
        reference : reference
       };
    
       await firestore().collection("Application").add(useData);//

       
      // await firestore().collection('Application').doc('ABC').get(aaddhar);
       //for fire store 
       Alert.alert("Submit Successfully");
    }
    else{
        Alert.alert("Somthing is Wrong");
    }
};


    return (
        <ScrollView style={style.text}>
            <Image
                style={{ width: 150, height: 150, marginTop: 20, marginLeft: 10, alignSelf: 'center' }}
                //source={require('./src/assets/logo_inapp.jpg')} 
                source={{ uri: 'https://i.ibb.co/ZTjhpYW/GovAgri1.jpg ' }}
      
                />

            <Text style={style.text3}>Fill The Survey Form</Text>
            <Text style={style.text4}>All fields are mandetory</Text>
            <TextInput label={'Account No .... (11 digit)'} 
            style={style.text5}
            mode='outlined'
            value={account}//
            onChangeText={txt=>setAccount(txt)}
            />
            <TextInput label={'Farmer name'}
            style={style.text5}
            mode='outlined'
            value={farmer}//
            onChangeText={txt=>setFarmer(txt)}
            />
            <TextInput label={'Aaddhar card no .... (12 digit)'}
            style={style.text5}
            secureTextEntry={true}
            mode='outlined' 
            value={aaddhar}//
            onChangeText={txt=>setAaddhar(txt)}
            />
            <TextInput label={'Mobile no .... (10 digit)'} 
            style={style.text5}
            mode='outlined' 
            value={cell}//
            onChangeText={txt=>setCell(txt)}
            />
            <TextInput label={'Bank Account Number'} 
            style={style.text5}
            secureTextEntry={true}
            mode='outlined' 
            value={bank}//
            onChangeText={txt=>setBank(txt)}
            />
            <TextInput label={'IFSC Code'} 
            style={style.text5}
            secureTextEntry={true}
            mode='outlined' 
            value={ifsc}//
            onChangeText={txt=>setIfse(txt)}
            />
            <TextInput label={'Total Area (in Acre)'} 
            style={style.text5}
            mode='outlined' 
            value={tarea}//
            onChangeText={txt=>setTarea(txt)}
            />
            <TextInput label={'Total Area Affected(in Acre)'} 
            style={style.text5}
            mode='outlined' 
            value={affected}//
            onChangeText={txt=>setAffected(txt)}
            />
            <TextInput label={'Percentage of Affected area'} style={style.text5}
                mode='outlined' />
            <TextInput label={'Reference number for Goverment'} 
            style={style.text5}
            mode='outlined' 
            value={reference}//
            onChangeText={txt=>setReference(txt)}
            />
            <TouchableOpacity onPress={() => {navigation.navigate("UpImg")} }>
                <View style={{ marginHorizontal: 25, marginTop: 15, paddingBottom: 15}}>
                    <Text style={style.text7}>Photo</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => { Application(), console.warn("Regestration success") } }>
                <View style={{ marginHorizontal: 25, marginTop: 15, paddingBottom: 15 }}>
                    <Text  style={style.text8}>submit
                   
                    </Text>
                </View>
               
            </TouchableOpacity>
            
        </ScrollView>
    )

}


export default Fillup;

const style=StyleSheet.create({
    text:{
       backgroundColor:'white',
       marginTop:0,
       marginBottom:0,
       marginHorizontal:0,
       borderWidth:0,
       borderColor:'#2f8C88'
    },
    text1:{
        fontSize: 14.5,
        color: '#000d1a',
        alignSelf:'center',
        marginTop:-35,
        fontFamily:'Montserrat-Bold'
    },
    text2:{
        fontSize: 14,
        color: '#2f8C88',
        marginStart:270,
        marginTop:-35,
        fontFamily:'Montserrat-Bold',
        textDecorationLine: 'underline'
    },
    text3:{
        fontSize:25,
        color:'#437d21',
        marginStart:30,
        marginTop:10,
        marginLeft:32,
        fontFamily:'Montserrat-Bold'
    },
    text4:{
        fontSize:17,
        color:'#59A52c',
        marginStart:30,
        fontFamily:'Montserrat-Medium',
        marginBottom:20,
        marginLeft:32,
    },
    text5:{
        paddingVertical:'-1%',
        width:330,
        alignSelf:'center',
        marginTop:15,
        fontFamily:'Montserrat-Medium'
    },
    text6:{
        fontSize:13,
        color:'#2f8C88',
        marginStart:208,
        fontFamily:'Montserrat-Medium',
        marginTop:6 
    },
    text7:{
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#59A52C',
        fontFamily:'Montserrat-Regular',
        padding:8
    },
    text8:{
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#437d21',
        fontFamily:'Montserrat-Regular',
        padding:10
    }
})



























































































































































