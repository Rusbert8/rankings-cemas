
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_WMkXgz1VGadOYztJs7OY30aSEZTuGIg",
    authDomain: "rankings-cemas.firebaseapp.com",
    projectId: "rankings-cemas",
    storageBucket: "rankings-cemas.appspot.com",
    messagingSenderId: "193263297303",
    appId: "1:193263297303:web:f285432a75d975d8944d52",
    measurementId: "G-V17NRJM8LM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase conexion')

  export default firebase.firestore();