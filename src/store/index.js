import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleware} from './tokenReducer';
import {thunk} from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {commentsDataReducer} from './commentsData/commentsDataReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  auth: authReducer,
  posts: postsReducer,
  commentsData: commentsDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);

