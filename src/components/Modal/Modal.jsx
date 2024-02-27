import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import Loader from '../../UI/Loader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [data, status, error] = useCommentsData(id);

  const [hasDataPost, setHasDataPost] = useState(false);
  const isDataLoaded = status === 'loaded';
  const post = data ? data[0] : null;
  const comments = data ? data[1] : [];
  // const [hasDataPost, setHasDataPost] = useState(false);

  const handleClick = e => {
    const target = e.target;

    if (
      // закрывает модалку при клике на оверлей
      target === overlayRef.current ||
      // закрывает модалку при клике на Esc
      e.code === 'Escape'
    ) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleClick);
    };
  }, []);

  useEffect(() => {
    setHasDataPost(!!data && !!data.length);
  }, [data]);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {hasDataPost &&
          isDataLoaded ? (
          <>
            <h2 className={style.title}>{post.title}</h2>
            <p className={style.author}>{post.author}</p>
            <FormComment />
            <Comments comments={comments}/>
          </>
        ) : hasDataPost && status === 'error' ?
          <h3>Ошибка {error}</h3> :
          <h3>
            Загрузка данных...
            <Loader />
          </h3>
        }
        <button
          className={style.close}
          onClick={() => {
            navigate(`/category/${page}`);
          }}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  closeModal: PropTypes.func,
};
