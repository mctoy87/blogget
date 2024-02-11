import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../store/posts/action';

export const usePosts = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.posts.data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts];
};
