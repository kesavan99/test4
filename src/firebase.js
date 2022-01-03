import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
  apiKey: "AIzaSyDb0P1_-ZdswnMCXpU-v79laYRSNVmQAqY",
  authDomain: "chat-app-65b66.firebaseapp.com",
  databaseURL: "https://chat-app-65b66-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-65b66",
  storageBucket: "chat-app-65b66.appspot.com",
  messagingSenderId: "26443040810",
  appId: "1:26443040810:web:49a8016ce8baa1bec3db53",
  measurementId: "G-BPPQ8WLR4T"
})

export const auth = app.auth()
export default app
