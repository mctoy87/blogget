import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

// export const postsRequestAsync2 = (newPage) => (dispatch, getState) => {
//   console.log('Идет fetch-запрос');
//   let page = getState().posts.page;
//   // console.log('page: ', page);
//   if (newPage) {
//     page = newPage;
//     dispatch(postsSlice.actions.changePage({page}));
//   }
//   const token = getState().tokenReducer.token;
//   const after = getState().posts.after;
//   const loading = getState().posts.loading;
//   const isLast = getState().posts.isLast;
//   console.log('afterGetState: ', getState().posts.after);

//   if (!token || loading || isLast) return;
//   dispatch(postsSlice.actions.postsRequest());

//   axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(({data}) => {
//       console.log('Идет fetch-запрос/получены данные');
//       // console.log('data: ', data);
//       const posts = data.data;
//       console.log('posts: ', posts);

//       // console.log('after: ', after);
//       if (after) {
//         dispatch(
//           postsSlice.actions.postsRequestSuccessAfter({posts})
//         );
//       } else {
//         dispatch(
//           postsSlice.actions.postsRequestSuccess({posts})
//         );
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       dispatch(
//         postsSlice.actions.postsRequestSuccess({error: error.toString()})
//       );
//     });
// };

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, dispatch}) => {
    const store = getState();
    let page = store.posts.page;
    if (newPage) {
      page = newPage;
      console.log(`Вызов диспетчера категории ${page}`);
      dispatch(postsSlice.actions.changePage({page}));
    }

    const token = store.tokenReducer.token;
    const after = store.posts.after;
    // const loading = store.posts.loading;
    const isLast = store.posts.isLast;

    console.log('Store: ', store);

    if (!page || isLast) return store.posts;
    console.log('store перед axios: ', store);

    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
        const posts = data.data;

        if (after) {
          const postData = [...store.posts.posts, ...posts.children];

          posts.children = postData;

          // dispatch(
          //   postsSlice.actions.postsRequestSuccessAfter({posts})
          // );

          return {posts};
        } else {
          return {posts};
        }
      })
      .catch((error) => ({error: error.toString()}));
  }
);
