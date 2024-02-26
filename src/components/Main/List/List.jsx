import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Loader from '../../../UI/Loader';
import {useEffect} from 'react';
import {End} from './End/End';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const postsAfter = useSelector(state => state.posts.after);
  const loading = useSelector(state => state.posts.loading);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

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
              onClick={(e) => dispatch(postsRequestAsync())}
            >
              Загрузить еще
            </button>
          ) : (
            <End />
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

