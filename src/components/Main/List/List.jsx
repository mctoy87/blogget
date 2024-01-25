import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {postContext} from '../../../context/postContext';


export const List = () => {
  const {posts} = useContext(postContext);

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

