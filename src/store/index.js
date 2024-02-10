import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleware} from './tokenReducer';
import {thunk} from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  auth: authReducer,
  posts: postsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);

