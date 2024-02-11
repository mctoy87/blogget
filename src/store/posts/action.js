import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(postsRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const array = [];
      data.data.children.map((item) => {
        const {
          title,
          author,
          id,
          ups,
          selftext: markdown,
          thumbnail,
          url,
          created: date,
        } = item.data;
        array.push({title, author, id, ups, markdown, thumbnail, url, date});
      });
      dispatch(postsRequestSuccess(array));
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsRequestSuccess(err.toString()));
    });
};
