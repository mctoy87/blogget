import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR,
} from './action';

const initialState = {
  data: [],
  error: '',
};


export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        error: '',
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: '',
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
