import { takeLatest, call, put, all } from 'redux-saga/effects'

import { UserActionTypes } from './user.types'
import {
    signInFailure,
    signInSuccess,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess,
} from './user.action'
import {
    auth,
    provider,
    createUserProfileDocument,
    getCurrentUser,
} from '../../firebase/firebase.utils'

// worker
function* getSnapshotFromUserAuth(userAuth, additionalData) {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData)
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

function* signUpWithCredentials({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailure(error))
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

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithCredentials)
}

function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onOnCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}
