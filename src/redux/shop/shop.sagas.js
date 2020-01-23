import { takeEvery, put, call } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { ShopActionTypes } from './shop.types'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

// worker
export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        console.log(snapshot)
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

// watcher
export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
