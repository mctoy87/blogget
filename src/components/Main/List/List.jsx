import {useEffect, useRef} from 'react';
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import Loader from '../../../UI/Loader';


export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const postsAfter = useSelector(state => state.posts.after);
  console.log('postsData: ', postsData);
  const loading = useSelector(state => state.posts.loading);

  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postsRequestAsync());
  };

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Обнаружен');
        dispatch(postsRequestAsync());
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
        {loading && (
          <li className={style.loader}>
            <p >Загрузка данных...</p>
            <Loader/>
          </li>)
        }
        {postsData && (
          postsData.map(({data}) => (
            <Post key={data.id} postData={data}/>
          )))
        }
        {(postsData.length > 0 && loading) && (
          <li className={style.loader}>
            <p >Загрузка данных...</p>
            <Loader/>
          </li>)
        }
        {
          (postsData && postsAfter && (postsData.length > 20)) ? (
            <button
              className={style.morePosts}
              onClick={(e) => handleClick(e)}
            >
              Загрузить еще
            </button>
          ) : (
            <li ref={endList} className={style.end}/>
          )
        }
      </ul>
      <Outlet />
    </>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

