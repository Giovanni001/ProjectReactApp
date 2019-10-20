const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyDb5WAQlaQZFJXlxA5Q2TbtFB4vqy7KMsY",
    authDomain: "company-project-93942.firebaseapp.com",
    databaseURL: "https://company-project-93942.firebaseio.com",
    projectId: "company-project-93942",
    storageBucket: "company-project-93942.appspot.com",
    messagingSenderId: "931655374943",
    appId: "1:931655374943:web:6aff04f8fbc6b5d61823ea",
    measurementId: "G-NZTZ9BPCYX"
  }

  // Initialize Firebase
  //firebase.analytics()

  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())
  

  export const storage = app.storage()
  export const auth = app.auth()

  export default config