import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useStore} from 'react-redux';


export const List = () => {
  const store = useStore();
  const posts1 = store.getState().posts.data;
  console.log('posts1: ', posts1);
  const [posts] = usePosts();

  return (
    <ul className={style.list}>
      {posts.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
    </ul>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

