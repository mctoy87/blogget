import {put, takeLatest, select} from '@redux-saga/core/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  SEARCH_REQUEST,
  searchRequestError,
  searchRequestSuccess
} from './searchAction';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = yield axios(`${URL_API}/searxch?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(searchRequestSuccess(request.data.data));
  } catch (err) {
    yield put(searchRequestError(err.toString()));
  }
}

// function* workerSearch(action) {
//   const token = yield select(state => state.tokenReducer.token);
//   const {data} = yield call(fetchSearch, action.search, token);
//   yield put(searchRequestSuccess(data));
// }

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}