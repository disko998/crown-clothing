import { takeLatest, call, put, all } from 'redux-saga/effects'

import { UserActionTypes } from './user.types'
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure } from './user.action'
import {
    auth,
    provider,
    createUserProfileDocument,
    getCurrentUser,
} from '../../firebase/firebase.utils'

// worker
function* getSnapshotFromUserAuth(userAuth) {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(provider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

function* signOutUser() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

// watcher
function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

function* onOnCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onOnCheckUserSession),
        call(onSignOutStart),
    ])
}
