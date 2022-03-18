import { all } from 'redux-saga/effects'
import { appSaga } from './ducks/app/sagas'
import { authSaga } from './ducks/auth/sagas'
import { tagsSaga } from './ducks/tags/sagas'
import { tweetsSaga } from './ducks/tweets/sagas'

export default function* rootSaga() {
  yield all([appSaga(),tweetsSaga(), tagsSaga(), authSaga()])
}
