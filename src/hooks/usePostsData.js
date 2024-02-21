import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const usePostsData = () => {
  const token = useSelector(state => state.tokenReducer.token);
  console.log('token: ', token);
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts];
};
