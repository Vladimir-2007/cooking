import firebase from 'firebase/app'
import 'firebase/firestore'



firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}