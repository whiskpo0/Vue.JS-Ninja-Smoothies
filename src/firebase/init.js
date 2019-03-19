 import firebase from 'firebase'
 import firestore from 'firebase/firestore'


 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCb8x17s6_zvc2Z0hZfLVHhpZUy5DPj7QA",
    authDomain: "ninja-smoothies-c81be.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-c81be.firebaseio.com",
    projectId: "ninja-smoothies-c81be",
    storageBucket: "ninja-smoothies-c81be.appspot.com",
    messagingSenderId: "749912863005"
  };

  const firebaseApp = firebase.initializeApp(config);
  
  // Export firestore datebase
  export default firebase.firestore()