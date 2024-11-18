import firebase from 'firebase/compat/app';//for firebase
import firebase  from 'firebase/compat/storage';
import firebase from 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDQSuuwkFyKMKWNjEMhmhrDwcMskmS7A90",
    authDomain: "myagri-6485a.firebaseapp.com",
    projectId: "myagri-6485a",
    storageBucket: "myagri-6485a.appspot.com",
    messagingSenderId: "99137112228",
    appId: "1:99137112228:web:be0db2e84fe08ce6d5fe31"
  };
  if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export {firebase};
  export const db = getFirestore(app);