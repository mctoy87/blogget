import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleware} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import commentsReducer from './commentsData/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    posts: postsReducer,
    commentsData: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware)
});


