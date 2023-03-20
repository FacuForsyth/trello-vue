import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './settings'
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp);
export default firebaseApp