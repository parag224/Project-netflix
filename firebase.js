// import firebase from 'firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXQ5bhN5rCtcH6G4Tiu9VN4C545vb5LfA",
    authDomain: "netflix-build-559fd.firebaseapp.com",
    projectId: "netflix-build-559fd",
    storageBucket: "netflix-build-559fd.appspot.com",
    messagingSenderId: "709324544779",
    appId: "1:709324544779:web:a52db08506507a58bee00e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;