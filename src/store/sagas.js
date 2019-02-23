import { put, call, takeEvery } from 'redux-saga/effects'
import { pageHeaderActionTypes, pageHeaderActionCreator } from '../components/page-header'
import { commonApi } from '../service'

function* rootSaga() {
  yield takeEvery(pageHeaderActionTypes.HOT_LIST_GET, setHotList)
}

function* setHotList() {
  const hotList = yield call(commonApi.getHotSearchKey)
  yield put(pageHeaderActionCreator.hostListSet({
    hotList,
    hotIndex: 0
  }))
}

export default rootSaga