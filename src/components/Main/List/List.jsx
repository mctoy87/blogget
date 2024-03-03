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
import {postsSlice} from '../../../store/posts/postsSlice';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  // console.log('postsData: ', postsData);
  const postsAfter = useSelector(state => state.posts.after);
  // console.log('postsAfter: ', postsAfter);
  const loading = useSelector(state => state.posts.loading);
  const isLast = useSelector(state => state.posts.isLast);
  const dispatch = useDispatch();
  const {page} = useParams();


  useEffect(() => {
    dispatch(postsSlice.actions.changePage({page}));
    dispatch(postsRequestAsync());
  }, [page]);

  return (
    <>
      {loading && (
        <div className={style.loader}>
          <p >Загрузка данных...</p>
          <Loader/>
        </div>)
      }
      <ul className={style.list}>
        {postsData && (
          postsData.map(({data}) => (
            <Post key={data.id} postData={data}/>
          )))
        }
      </ul>
      {(postsData.length > 0 && loading) && (
        <div className={style.loader}>
          <p >Загрузка данных...</p>
          <Loader/>
        </div>)
      }
      {
        (postsData && postsAfter && (postsData.length > 20)) ? (
          <div className={style.btnWrapper}>
            <button
              className={style.morePosts}
              onClick={(e) => dispatch(postsRequestAsync())}
            >
              Загрузить еще
            </button>
          </div>
        ) : (
          (!loading && !isLast) && <End />
        )
      }
      <Outlet />
    </>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
};

