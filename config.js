import * as firebase from 'firebase'
require ('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyB_Ce65IWeDUaPNx2YIdaqw4h1HFCAhimE",
    authDomain: "project-77-9a907.firebaseapp.com",
    projectId: "project-77-9a907",
    storageBucket: "project-77-9a907.appspot.com",
    messagingSenderId: "490235198736",
    appId: "1:490235198736:web:3058a294d6cabe32eef995"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();