 import firebase from 'firebase'
 import firestore from 'firebase/firestore'


 // Initialize Firebase
 var config = {
    apiKey: "00000000000000000000000000000000000000000",
    authDomain: "YourDomainInformationHere",
    databaseURL: "https://yourProjectInfoHere.firebaseio.com",
    projectId: "YourPrjectIDGoesHere",
    storageBucket: "YouNeedToEnterYourInfoHere",
    messagingSenderId: "000000000000"
  };

  const firebaseApp = firebase.initializeApp(config);
  
  // Export firestore datebase
  export default firebase.firestore()