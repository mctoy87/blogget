import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleware} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import postsReducer from './posts/postsSlice';
import commentsReducer from './commentsData/commentsSlice';
// import {searchReducer} from './search/searchReducer';
import searchReducer from './search/searchSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    posts: postsReducer,
    commentsData: commentsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
