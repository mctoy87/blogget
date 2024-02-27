import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;


  if (!token || loading || isLast) return;
  dispatch(postsSlice.actions.postsRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      console.log('data: ', data);
      const posts = data.data;
      if (after) {
        dispatch(postsSlice.actions.postsRequestSuccessAfter({posts}));
      } else {
        dispatch(postsSlice.actions.postsRequestSuccess({posts}));
        const stateMEE = getState().posts;
        console.log('stateMEE: ', stateMEE);
      }
    })
    .catch((error) => {
      console.error(error);
      dispatch(postsSlice.actions.postsRequestSuccess(error.toString()));
    });
};
