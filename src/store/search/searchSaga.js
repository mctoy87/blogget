import {put, takeLatest, select} from '@redux-saga/core/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  // searchRequest,
  searchRequestError,
  searchRequestSuccess
} from './searchSlice';
// import {postsSlice} from '../posts/postsSlice';
// import {searchRequestError} from './searchSlice';

function* fetchSearch(search) {
  console.log('search: ', search);
  const token = yield select(state => state.tokenReducer.token);
  try {
    const request = yield axios(`${URL_API}/search?q=${search.payload}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    console.log(request);
    console.log('request.data.data: ', request.data.data);
    yield put(searchRequestSuccess(request.data.data));
    // yield put(searchRequestSuccess(request.data.data));
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
  yield takeLatest('search/searchRequest', fetchSearch);
}
