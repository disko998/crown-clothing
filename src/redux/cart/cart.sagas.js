import { takeLatest, all, call, put } from 'redux-saga/effects'

import { UserActionTypes } from '../user/user.types'
import { clearCart } from './cart.action'

//worker
function* clearCartOnSignOut() {
    yield put(clearCart())
}

// watcher
function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
}
