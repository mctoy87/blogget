// import {useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {postsRequestAsync} from '../store/posts/postsAction';

// export const usePostsData = () => {
//   const token = useSelector(state => state.tokenReducer.token);
//   const posts = useSelector(state => state.posts.posts);
//   const loading = useSelector((state => state.posts.loading));
//   console.log('HELLO');
//   console.log('loading: ', loading);

//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(postsRequestAsync());
//   }, [token]);

//   return [posts];
// };
