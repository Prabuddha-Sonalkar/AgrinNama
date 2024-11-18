//  import React,{useState} from "react";
//  import { Image, TouchableOpacity, StyleSheet, Text, View , ScrollView,} from "react-native";
//  import { TextInput } from "react-native-paper";//
//  import auth from '@react-native-firebase/auth';
//  import firestore from'@react-native-firebase/firestore'//for fire store
//  const Signup=(props)=>{
//      const {navigation}=props;
//      const [email,setEmail]= useState('');
//      const [password,setPassword]= useState('');
//      const [name,setName] = useState('');
//      const create=async ()=>{//
//       // if(email.length > 0 && password.length > 0 && name.length>0){
//      const response = await auth().createUserWithEmailAndPassword(
//      email,
//      password
//     );
//     //for fire store 
//     const useData = {
//      id : response.user.email,
//      name : name,
//      email: email
//     };
//     await firestore().collection("Users").doc(response.user.email).set(useData);                 
//     //for fire store
//   // }
//  //  else{
//  //    alert("Please enter vallid Email id and password..!")
//  //  }
//   then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }
//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }
//     console.error(error);
//   }); 
//
//    }
//     return(
//        <ScrollView style={style.text}>
//            {/* <Image source={require('./android/src/images/GovAgri.jpg')} resizeMode="cover" style={{ height: 120, width: 120 ,marginTop:30 }}></Image> */}
//         
//            <Image 
//                 style={{ height: 120, width: 120 ,marginTop:30 }}
//                 source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
//                  />
//                   {/* https://i.ibb.co/ZTjhpYW/GovAgri1.jpg   */}
//        
//            <TouchableOpacity onPress={() => { console.warn('Sign in to continue') }}>
//            <View>
//     
//             <Text  onPress={()=>{
//              navigation.navigate("Signin")}}
//             style={style.text1}>Sign In</Text>
//             </View>
//             </TouchableOpacity>
//     
//            <TouchableOpacity onPress={() => { console.warn('fill the following field to singup') }}>
//            <View>
//            <Text style={style.text2}>Sign Up</Text>
//            </View>
//            </TouchableOpacity>
//        
//            <Text style={style.text3}>Create Account,</Text>
//            <Text style={style.text4}>Sign up to get started!</Text>
//        
//            <TextInput label={'Full Name'} 
//            style={style.text5}
//            value={name}
//            mode='outlined'
//            onChangeText={txt=>setName(txt)}
//            />
//             <TextInput label={'Government Id'} style={style.text5}
//             mode='outlined'
//             value={email}//
//             onChangeText={txt=>setEmail(txt)}//
//             />
//             <TextInput label={'Phone Number'} style={style.text5}
//             mode='outlined'
//             /> 
//        
//             <TextInput label={'Password'} style={style.text5}
//             secureTextEntry={true}
//             mode='outlined'
//             value={password}//
//            onChangeText={txt=>setPassword(txt)}//
//             />
//       
//             <Text onPress={()=>{
//              navigation.navigate("Signin")}}
//             style={{color:'#59A52C',marginTop:50,alignSelf:'center'}}>
//              ___________Or Sign In___________</Text>
//             <TouchableOpacity onPress={() => { console.warn('Sing In Successfully'),create(); }}>
//             <View style={{ marginHorizontal: 15, marginTop: 15 }}>
//             <Text style={style.text7}>Sign Up</Text>
//             </View>
//             </TouchableOpacity>
//          </ScrollView>
//      )
//  }
//  export default Signup;
//  const style=StyleSheet.create({
//      text:{
//         backgroundColor:'white',
//  
//      },
//      text1:{
//          fontSize: 14.5,
//          color: '#59A52C',
//          alignSelf:'center',
//          marginTop:-65,
//          fontFamily:'Montserrat-Bold'
//      },
//      text2:{
//          fontSize: 14,
//          color: '#437d21',
//          marginStart:280,
//          marginTop:-65,
//          fontFamily:'Montserrat-Bold',
//          textDecorationLine: 'underline'
//      },
//      text3:{
//          fontSize:25,
//          color:'#437d21',
//          marginStart:20,
//          marginTop:60,
//          fontFamily:'Montserrat-Bold'
//      },
//      text4:{
//          fontSize:17,
//          color:'#59A52C',
//          marginStart:20,
//          fontFamily:'Montserrat-Medium',
//          marginBottom:20
//      },
//      text5:{
//          paddingVertical:'-1%',
//          width:330,
//          alignSelf:'center',
//          marginTop:15,
//          fontFamily:'Montserrat-Medium'
//      },
//      text6:{
//          fontSize:13,
//          color:'#2f8C88',
//          marginStart:208,
//          fontFamily:'Montserrat-Medium',
//          marginTop:6 
//      },
//      text7:{
//          marginTop: 30,
//          fontSize: 15,
//          textAlign: 'center',
//          color: 'white',
//          backgroundColor: '#437d21',
//          fontFamily:'Montserrat-Regular',
//          padding:10
//      }
//  })


//*********** ***************************************************************************************************/


// import React from "react";
// import { Text, ScrollView , View ,StyleSheet,TouchableOpacity, Alert,Image} from "react-native";
// import { TextInput } from "react-native-paper";
// import { useState } from "react";
// import firestore from '@react-native-firebase/firestore';
// import uuid from 'react-native-uuid';
// 
// const Signup=(props)=>{
    // const {navigation}=props;
    // const[name,setName]=useState('');
    // const[email,setEmail]=useState('');
    // const[mobile,setMobile]=useState('');
    // const[Password,setPassword]=useState('');
    // const[ConfirmPassword,setConfirmPassword]=useState('');
    // 
// 
    // const registerUser=()=>{
        // const userId=uuid.v4();
        // firestore().
        // collection('users')
        // .doc(userId)
        // .set({
            // name:name,
            // email:email,
            // password:Password,
            // mobile:mobile,
            // userId:userId,
        // }).then(res=>{
            // console.log("user created");
            // navigation.navigate('Signin');
        // }).catch(error=>{
            // console.log(error);
        // });
    // };
    // const validate=()=>{
        // let isValid=true;
        // if(name==''){
            // isValid= false;
        // }
        // if(email==''){
            // isValid= false;
        // }
        // if(mobile==''){
            // isValid= false;
        // }
        // if(Password==''){
            // isValid= false;
        // }
        // if(ConfirmPassword==''){
            // isValid= false;
        // }
        // if(ConfirmPassword !== Password){
            // isValid= false;
        // }
        // return isValid;
    // };
    // return(
        // <ScrollView style={Styles.text}>
            {/* <Image  */}
    //  style={{ height: 120, width: 120 }}
    //  source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
    //   />
{/*  */}
             {/* <View> */}
             {/* <Text  onPress={()=>{ */}
            //   navigation.navigate("Signin")}}
            //  style={Styles.text1}>Sign In</Text>
             {/* </View> */}
{/*  */}
             {/* <View> */}
             {/* <Text style={Styles.text2}>Sign Up</Text> */}
             {/* </View> */}
{/*  */}
             {/* <Text style={Styles.text3}>Create Account,</Text> */}
             {/* <Text style={Styles.text4}>Sign up to get started!</Text> */}
{/*  */}
{/*  */}
{/*              */}
            {/* <TextInput  */}
            // label={'Full Name'} 
            // style={Styles.text5}
            // mode='outlined'
            // value={name}
            // onChangeText={txt=>setName(txt)}
            // />
            {/* <TextInput  */}
            // label={'Enter Email'} 
            // style={Styles.text5}
            // mode='outlined' 
            // value={email}
            // onChangeText={txt=>setEmail(txt)}
            // />
            {/* <TextInput  */}
            // label={'Enter Mobile'}
            // style={Styles.text5}
            // mode='outlined' 
            // keyboardType={'number-pad'}
            // value={mobile}
            // onChangeText={txt=>setMobile(txt)}
            // />
            {/* <TextInput  */}
            // label={'Enter Password'}
            // style={Styles.text5}
            // mode='outlined' 
            // value={Password}
            // secureTextEntry={true}
            // onChangeText={txt=>setPassword(txt)}
// 
            // />
            {/* <TextInput  */}
            // label={'Enter Confirm Password'}
            // style={Styles.text5}
            // mode='outlined' 
            // value={ConfirmPassword}
            // secureTextEntry={true}
            // onChangeText={txt=>setConfirmPassword(txt)}
            // />
            {/* <TouchableOpacity onPress={()=>{ */}
                // if(validate()){
                    // registerUser();
                // }else{
                    // Alert.alert('please enter the correct data');
                // }
                // 
            // }}>
{/*  */}
{/* <Text onPress={()=>{ */}
//  navigation.navigate("Signin")}}
// style={{color:'#59A52C',marginTop:50,alignSelf:'center'}}>
 {/* ___________Or Sign In___________</Text> */}
{/*  */}
{/*  */}
{/*  */}
{/*                  */}
           {/* <View style={{ marginHorizontal: 15, marginTop: 20 }}> */}
           {/* <Text style={Styles.text7}>Sign Up</Text> */}
           {/* </View> */}
           {/* </TouchableOpacity> */}
{/*             */}
{/*             */}
{/*             */}
{/*             */}
{/*             */}
{/*             */}
{/*          */}
{/*           */}
{/*  */}
         {/* </ScrollView> */}
// 
    // )
// }
// 
// export default Signup;
// 
// const Styles=StyleSheet.create({
    // container:{
        // flex:1,
        // backgroundColor:'White'
        // 
    // },
    // title:{
        // fontSize:30,
        // color:'black',
        // alignSelf:'center',
        // marginTop:80,
        // fontWeight:'600'
    // },
    // input:{
        // width:'90%',
        // height:50,
        // borderWidth:0.5,
        // borderRadius:10,
        // alignSelf:'center',
        // paddingLeft:20,
        // marginHorizontal:20,
        // marginTop:20,
        // color:'black',
    // },
    // button:{
        // marginTop: 30,
        // fontSize: 15,
        // textAlign: 'center',
        // color: 'white',
        // backgroundColor: '#2f8C88',
        // fontFamily:'Montserrat-Regular',
        // padding:10
    // },
    // text:{
        // backgroundColor:'white',
    //  },
    //  text1:{
        //  fontSize: 14.5,
        //  color: '#59A52C',
        //  alignSelf:'center',
        //  marginTop:-65,
        //  fontFamily:'Montserrat-Bold'
    //  },
    //  text2:{
        //  fontSize: 14,
        //  color: '#437d21',
        //  marginStart:280,
        //  marginTop:-65,
        //  fontFamily:'Montserrat-Bold',
        //  textDecorationLine: 'underline'
    //  },
    //  text3:{
        //  fontSize:25,
        //  color:'#437d21',
        //  marginStart:20,
        //  marginTop:30,
        //  fontFamily:'Montserrat-Bold'
    //  },
    //  text4:{
        //  fontSize:17,
        //  color:'#59A52C',
        //  marginStart:20,
        //  fontFamily:'Montserrat-Medium',
        //  marginBottom:20
    //  },
    //  text5:{
        //  paddingVertical:'-1%',
        //  width:330,
        //  alignSelf:'center',
        //  marginTop:15,
        //  fontFamily:'Montserrat-Medium'
    //  },
    //  text6:{
        //  fontSize:13,
        //  color:'#2f8C88',
        //  marginStart:208,
        //  fontFamily:'Montserrat-Medium',
        //  marginTop:6 
    //  },
    //  text7:{
        //  marginTop: 30,
        //  fontSize: 15,
        //  textAlign: 'center',
        //  color: 'white',
        //  backgroundColor: '#437d21',
        //  fontFamily:'Montserrat-Regular',
        //  padding:10
    //  }
// })


//***************************************************************************************************************** */



import React from "react";
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = (props) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const registerUser = () => {
    const userId = uuid.v4();
    firestore().
      collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: Password,
        mobile: mobile,
        userId: userId,
      }).then(res => {
        console.log("user created");
        navigation.navigate('Signin');
      }).catch(error => {
        console.log(error);
      });
  };

  const validate = () => {
    let isValid = true;

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === '') {
      isValid = false;
      Alert.alert('Invalid Name', 'Please enter your full name');
    }
    if (email === '' || !emailRegex.test(email)) {
      isValid = false;
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    }
    if (mobile === '') {
      isValid = false;
      Alert.alert('Invalid Mobile', 'Please enter your mobile number');
    }
    if (Password === '') {
      isValid = false;
      Alert.alert('Invalid Password', 'Please enter a password');
    }
    if (ConfirmPassword === '' || ConfirmPassword !== Password) {
      isValid = false;
      Alert.alert('Password Mismatch', 'Passwords do not match');
    }

    return isValid;
  };

  return (
    <ScrollView style={Styles.text}>
      <Image
        style={{ height: 120, width: 120 }}
        source={{ uri: 'https://i.ibb.co/FwKM55h/GovAgri.jpg' }}
      />

      <View>
        <Text onPress={() => {
          navigation.navigate("Signin")
        }}
          style={Styles.text1}>Sign In</Text>
      </View>

      <View>
        <Text style={Styles.text2}>Sign Up</Text>
      </View>

      <Text style={Styles.text3}>Create Account,</Text>
      <Text style={Styles.text4}>Sign up to get started!</Text>

      <TextInput
        label={'Full Name'}
        style={Styles.text5}
        mode='outlined'
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        label={'Enter Email'}
        style={Styles.text5}
        mode='outlined'
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        label={'Enter Mobile'}
        style={Styles.text5}
        mode='outlined'
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        label={'Enter Password'}
        style={Styles.text5}
        mode='outlined'
        value={Password}
        secureTextEntry={true}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        label={'Enter Confirm Password'}
        style={Styles.text5}
        mode='outlined'
        value={ConfirmPassword}
        secureTextEntry={true}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <TouchableOpacity onPress={() => {
        if (validate()) {
          registerUser();
        }

      }}>

        <Text onPress={() => {
          navigation.navigate("Signin")
        }}
          style={{ color: '#59A52C', marginTop: 50, alignSelf: 'center' }}>
          ___________Or Sign In___________
        </Text>

        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={Styles.text7}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Signup;

const Styles = StyleSheet.create({

    container:{
         flex:1,
         backgroundColor:'White'
         
       },
       title:{
         fontSize:30,
         color:'black',
         alignSelf:'center',
         marginTop:80,
         fontWeight:'600'
       },
       input:{
         width:'90%',
         height:50,
         borderWidth:0.5,
         borderRadius:10,
         alignSelf:'center',
         paddingLeft:20,
         marginHorizontal:20,
         marginTop:20,
         color:'black',
       },
       button:{
         marginTop: 30,
         fontSize: 15,
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#2f8C88',
         fontFamily:'Montserrat-Regular',
         padding:10
       },
       text:{
         backgroundColor:'white',
        },
        text1:{
          fontSize: 14.5,
          color: '#59A52C',
          alignSelf:'center',
          marginTop:-65,
          fontFamily:'Montserrat-Bold'
        },
        text2:{
          fontSize: 14,
          color: '#437d21',
          marginStart:280,
          marginTop:-65,
          fontFamily:'Montserrat-Bold',
          textDecorationLine: 'underline'
        },
        text3:{
          fontSize:25,
          color:'#437d21',
          marginStart:20,
          marginTop:30,
          fontFamily:'Montserrat-Bold'
        },
        text4:{
          fontSize:17,
          color:'#59A52C',
          marginStart:20,
          fontFamily:'Montserrat-Medium',
          marginBottom:20
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
          marginTop: 30,
          fontSize: 15,
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#437d21',
          fontFamily:'Montserrat-Regular',
          padding:10
        }
    
  });