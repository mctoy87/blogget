import {useEffect, useRef} from 'react';
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';

let count = 0;


export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postsRequestAsync());
  };

  useEffect(() => {
    dispatch(postsRequestAsync(page));
    console.log('Клик');
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Обнаружен');
        count++;
        console.log('count: ', count);
        if (count <= 3) dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {postsData && (postsData.map(({data}) => (
          <Post key={data.id} postData={data}/>
        )))}
        <li ref={endList} className={style.end}/>
        {(count >= 3) && (
          <button
            className={style.morePosts}
            onClick={(e) => handleClick(e)}
          >
            Загрузить еще
          </button>
        )}
      </ul>
      <Outlet />
    </>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

