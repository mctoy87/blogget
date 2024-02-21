import {useEffect, useRef} from 'react';
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';


export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
  }, [postsData.length]);

  return (
    <ul className={style.list}>
      {postsData && (postsData.map(({data}) => (
        <Post key={data.id} postData={data}/>
      )))}
      <li ref={endList} className={style.end}/>
    </ul>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

