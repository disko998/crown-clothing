import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDcJaKEhqhAy-z61TLyiEzsi8rO3lB46Wc",
authDomain: "crown-db-49fc2.firebaseapp.com",
databaseURL: "https://crown-db-49fc2.firebaseio.com",
projectId: "crown-db-49fc2",
storageBucket: "crown-db-49fc2.appspot.com",
messagingSenderId: "579149093433",
appId: "1:579149093433:web:6c7f0f7da96a4fe6548be8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return userRef
        
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const signInWithEmailAndPassword = (email, pass) => auth.signInWithEmailAndPassword(email, pass)

export default firebase