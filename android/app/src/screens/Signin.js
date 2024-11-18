//  import React,{useState}from "react";//
//  import {  TouchableOpacity, StyleSheet, Text, View , ScrollView , Image, Alert} from "react-native";
//  import { TextInput } from "react-native-paper";
//  import auth from '@react-native-firebase/auth';//


//  const Signin=(props)=>{
//      const {navigation}=props;
//      const [email,setEmail]= useState('');
//      const [password,setPassword]= useState('');
//      const createUsers=()=>{
//          auth()
//    .createUserWithEmailAndPassword(
//      email,
//     password,
//     )
//    .then(() => {
//      console.log('User account created & signed in!');
//    })
//    .catch(error => {
//      if (error.code === 'auth/email-already-in-use') {
//        console.log('That email address is already in use!');
//      }

//      if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//      console.error(error);
//    })
//      }
//      const userSignin = ()=>{
//        if(email.length > 0 && password.length > 0 ){
//        auth()
//        .signInWithEmailAndPassword(email,password)
//        .then(()=>{
//          Alert.alert("User logged in");
//          navigation.navigate("Admin");//call to servay and status
//        })
    
//       .catch(()=>{
//         console.log(error);
//       })
//     }
//     else {
//       Alert.alert("Please enter vallid Email id and password..!")
//     }
  
//  }
//      return(
//           <ScrollView style={style.text}>
//             <Image 
//                  style={{ height: 120, width: 120 ,marginTop:30 }}
//                  source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
//                   />
           
//            <Text onPress={() => { console.warn('Enter username & password to Signin') }}
//            style={style.text1}>Sign In</Text>
          
//             <Text  onPress={()=>{
//              navigation.navigate("Signup")}}
//             style={style.text2}>Sign Up</Text>
           
           
//            <Text style={style.text3}>Welcome,</Text>
//            <Text style={style.text4}>Sign In To Continue!</Text>
         
//            <TextInput label={'Email'} style={style.text5}
//             mode='outlined'
//            value={email}//
//            onChangeText={txt=>setEmail(txt)}//
//            />
           
//            <TextInput label={'Password'} style={style.text6}
//            secureTextEntry={true}
//            mode='outlined'
//            value={password}//
//            onChangeText={txt=>setPassword(txt)}//
//            />

//            <Text onPress={() => { navigation.navigate("Guest")  }}
//             style={{color:'#59A52C',marginTop:80,alignSelf:'center'}}>
//             ___________Or Sign In as a Guest___________</Text>


//            <TouchableOpacity onPress={() => { userSignin(); /*createUsers();*/ }}>
//            <View style={{ marginHorizontal: 15, marginTop: 50 }}>
//            <Text style={style.text8}>Sign In</Text>
//            </View>
//            </TouchableOpacity>

//         </ScrollView>
//     )
// }

//  export default Signin;

//  const style=StyleSheet.create({
//      text:{
//         backgroundColor:'white'
      
//     },
//     text1:{
//         fontSize: 14.5,
//         color: '#437d21',
//         alignSelf:'center',
//         marginTop:-65,
//         fontFamily:'Montserrat-Bold',
//         textDecorationLine: 'underline'
//     },
//     text2:{
//         fontSize: 14,
//         color: '#59A52C',
//         marginStart:280,
//         marginTop:-21.5,
//         fontFamily:'Montserrat-Bold'
//     },
//     text3:{
//         fontSize:25,
//         color:'#437d21',
//         marginStart:23,
//         marginTop:95,
//         fontFamily:'Montserrat-Bold'
//     },
//     text4:{
//         fontSize:18,
//         color:'#59A52C',
//         marginStart:23,
//         fontFamily:'Montserrat-Medium',
//         marginBottom:20
//     },
//     text5:{
//         paddingVertical:'-1%',
//         width:330,
//         alignSelf:'center',
//         marginTop:50,
//         fontFamily:'Montserrat-Medium',     
//     },
//         text6:{
//         spaddingVertical:'-1%',
//         width:330,
//         alignSelf:'center',
//         marginTop:30
//     },
//     text7:{
//         fontSize:13,
//         color:'#2f8C88',
//         marginStart:208,
//         fontFamily:'Montserrat-Medium',
//         marginTop:6 
//     },
//     text8:{
//         marginTop: 30,
//         fontSize: 15,
//         textAlign: 'center',
//         color: 'white',
//         backgroundColor:'#437d21',
//         fontFamily:'Montserrat-Regular',
//         padding:10
//     }
// })




/******** */


// 
// import React from "react";
// import { Text, ScrollView , View ,StyleSheet,TouchableOpacity, Alert,Image} from "react-native";
// import { TextInput } from "react-native-paper";
// import { useState } from "react";
// import firestore from '@react-native-firebase/firestore';
// import Loader from "./tabs/Loader";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// 
// const Signin=(props)=>{
    // const {navigation}=props;
    // const[email,setEmail]=useState('');
    // const[Password,setPassword]=useState('');
    // const [visible,setVisibal]=useState('false');
    // 
    //  const loginUser=()=>{
        // setVisibal(true);
        // firestore().collection("users").where("email","==",email).get().then(res=>{
        //    setVisibal(false);
            // if(res.docs!=[]){
            // console.log(JSON.stringify(res.docs[0].data()));
            // goToNext(
                // res.docs[0].data().name,
                // res.docs[0].data().email,
                // res.docs[0].data().userId,
                // );
            // }else{
                // Alert.alert("User not found")
            // }
        // }).catch(error=>{
            // setVisibal(false);
            // console.log(error);
            // Alert.alert("User not found");
        // });
    //  }
// 
    //  const goToNext=async(name,email,userId)=>{
    //    await AsyncStorage.setItem('NAME',name);
    //    await AsyncStorage.setItem('EMAIL',email);
    //    await AsyncStorage.setItem('USERID',userId);
    //    navigation.navigate('Admin');
    //  };
    // return(
        // <ScrollView style={Styles.text}>
             {/* <Image  */}
    //   style={{ height: 120, width: 120 ,marginTop:30 }}
    //   source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
    //    />
{/*  */}
            {/* <Text onPress={() => { console.warn('Enter username & password to Signin') }} */}
            // style={Styles.text1}>Sign In</Text>
{/*  */}
            {/* <Text  onPress={()=>{ */}
            //  navigation.navigate("Signup")}}
            // style={Styles.text2}>Sign Up</Text>
{/*              */}
            {/* <Text style={Styles.text3}>Welcome,</Text> */}
            {/* <Text style={Styles.text4}>Sign In To Continue!</Text> */}
{/*  */}
{/*  */}
            {/* <TextInput label={'Email'} style={Styles.text5} */}
            //   mode='outlined'
            //   value={email}//
            //   onChangeText={txt=>setEmail(txt)}//
            //   />
              {/* <TextInput label={'Password'} style={Styles.text6} */}
            //   secureTextEntry={true}
            //   mode='outlined'
            //   value={Password}//
            //   onChangeText={txt=>setPassword(txt)}//
            //   />
{/*  */}
{/*            */}
{/*            */}
            {/* <TouchableOpacity onPress={()=>{ */}
                // loginUser();
            // }}>
                {/* <Text onPress={() => { navigation.navigate("Guest")  }} */}
            //  style={{color:'#59A52C',marginTop:80,alignSelf:'center'}}>
  {/* ___________Or Sign In as a Guest___________</Text> */}
           {/* <View style={{ marginHorizontal: 15, marginTop: 50 }}> */}
           {/* <Text style={Styles.text8}>Sign In</Text> */}
           {/* </View> */}
           {/* </TouchableOpacity> */}
{/*             */}
{/*             */}
{/*             */}
{/*  */}
{/*  */}
          {/* <Loader visble={visible}/> */}
         {/* </ScrollView> */}
// 
    // )
// }
// 
// export default Signin;
// 
// const Styles=StyleSheet.create({
    // text:{
        // backgroundColor:'white'
    // },
    // text1:{
        // fontSize: 14.5,
        // color: '#437d21',
        // alignSelf:'center',
        // marginTop:-65,
        // fontFamily:'Montserrat-Bold',
        // textDecorationLine: 'underline'
    // },
    // text2:{
        // fontSize: 14,
        // color: '#59A52C',
        // marginStart:280,
        // marginTop:-21.5,
        // fontFamily:'Montserrat-Bold'
    // },
    // text3:{
        // fontSize:25,
        // color:'#437d21',
        // marginStart:23,
        // marginTop:95,
        // fontFamily:'Montserrat-Bold'
    // },
    // text4:{
        // fontSize:18,
        // color:'#59A52C',
        // marginStart:23,
        // fontFamily:'Montserrat-Medium',
        // marginBottom:20
    // },
    // text5:{
        // paddingVertical:'-1%',
        // width:330,
        // alignSelf:'center',
        // marginTop:50,
        // fontFamily:'Montserrat-Medium',     
    // },
        // text6:{
        // spaddingVertical:'-1%',
        // width:330,
        // alignSelf:'center',
        // marginTop:30
    // },
    // text7:{
        // fontSize:13,
        // color:'#2f8C88',
        // marginStart:208,
        // fontFamily:'Montserrat-Medium',
        // marginTop:6 
    // },
    // text8:{
        // marginTop: 30,
        // fontSize: 15,
        // textAlign: 'center',
        // color: 'white',
        // backgroundColor:'#437d21',
        // fontFamily:'Montserrat-Regular',
        // padding:10
//     }
// })

/////////////////////////////////



import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { TextInput } from "react-native-paper";
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signin = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    checkUserStatusAndNavigate();
  }, []);

  const checkUserStatusAndNavigate = async () => {
    try {
      // Check if the user is already signed in by checking a flag in AsyncStorage
      const userIsSignedIn = await AsyncStorage.getItem('USER_SIGNED_IN_FLAG');

      if (userIsSignedIn === 'true') {
      //  User is already signed in, navigate to the next page
        navigateToNextPage();
      }
    } catch (error) {
      console.error('Error checking user status:', error);
    }
  };
  

  const loginUser = () => {
    setVisible(true);
    firestore().collection("users").where( "email", "==", email ).where("password","==", password).get().then(res => {
      setVisible(false);
      if (res.docs.length > 0) {
        const userData = res.docs[0].data();
        storeUserDataAndNavigate(userData.name, userData.email, userData.userId);
        Alert.alert("successful");
      } else {
        Alert.alert("User not found");
      }
    }).catch(error => {
      setVisible(false);
      console.error(error);
      Alert.alert("User not found");
    });
  };

  const storeUserDataAndNavigate = async (name, email, userId) => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
    await AsyncStorage.setItem('USER_SIGNED_IN_FLAG', 'true'); // Set the sign-in flag
    navigateToNextPage();
  };

  const navigateToNextPage = () => {
    navigation.navigate('Admin');
  };

  return (
    <ScrollView style={Styles.text}>
      <Image
        style={{ height: 120, width: 120, marginTop: 30 }}
        source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
      />

      <Text onPress={() => { console.warn('Enter username & password to Sign In') }} style={Styles.text1}>Sign In</Text>

      <Text onPress={() => {
        navigation.navigate("Signup")
      }} style={Styles.text2}>Sign Up</Text>

      <Text style={Styles.text3}>Welcome,</Text>
      <Text style={Styles.text4}>Sign In To Continue!</Text>

      <TextInput label={'Email'} style={Styles.text5}
        mode='outlined'
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput label={'Password'} style={Styles.text6}
        secureTextEntry={true}
        mode='outlined'
        value={password}
        onChangeText={txt => setPassword(txt)}
      />

      <TouchableOpacity onPress={() => {
        loginUser();
      }}>
        <Text onPress={() => { navigation.navigate("Guest")  }}
        style={{ color: '#59A52C', marginTop: 80, alignSelf: 'center' }}>
          ___________Or Sign In as a Guest___________
        </Text>
 
 
 
        <View style={{ marginHorizontal: 15, marginTop: 50 }}>
          <Text style={Styles.text8}>Sign In</Text>
          
        </View>
      </TouchableOpacity>

      
    </ScrollView>
  );
}

export default Signin;

const Styles = StyleSheet.create({
  text: {
    backgroundColor: 'white'
  },
  text1: {
    fontSize: 14.5,
    color: '#437d21',
    alignSelf: 'center',
    marginTop: -65,
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline'
  },
  text2: {
    fontSize: 14,
    color: '#59A52C',
    marginStart: 280,
    marginTop: -21.5,
    fontFamily: 'Montserrat-Bold'
  },
  text3: {
    fontSize: 25,
    color: '#437d21',
    marginStart: 23,
    marginTop: 95,
    fontFamily: 'Montserrat-Bold'
  },
  text4: {
    fontSize: 18,
    color: '#59A52C',
    marginStart: 23,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 20
  },
  text5: {
    paddingVertical: '-1%',
    width: 330,
    alignSelf: 'center',
    marginTop: 50,
    fontFamily: 'Montserrat-Medium',
  },
  text6: {
    spaddingVertical: '-1%',
    width: 330,
    alignSelf: 'center',
    marginTop: 30
  },
  text7: {
    fontSize: 13,
    color: '#2f8C88',
    marginStart: 208,
    fontFamily: 'Montserrat-Medium',
    marginTop: 6
  },
  text8: {
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#437d21',
    fontFamily: 'Montserrat-Regular',
    padding: 10
  }
});



























































































