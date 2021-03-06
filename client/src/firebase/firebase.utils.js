import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyDcJaKEhqhAy-z61TLyiEzsi8rO3lB46Wc',
    authDomain: 'crown-db-49fc2.firebaseapp.com',
    databaseURL: 'https://crown-db-49fc2.firebaseio.com',
    projectId: 'crown-db-49fc2',
    storageBucket: 'crown-db-49fc2.appspot.com',
    messagingSenderId: '579149093433',
    appId: '1:579149093433:web:6c7f0f7da96a4fe6548be8',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

// Utilities functions

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionName, objectsToAdd) => {
    const objectToArray = Object.keys(objectsToAdd).map(key => objectsToAdd[key])
    const collectionRef = firestore.collection(collectionName)

    const batch = firestore.batch()
    objectToArray.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collection => {
    const transformedCollection = collection.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export default firebase
