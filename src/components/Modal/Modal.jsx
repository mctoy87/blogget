import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({closeModal, id}) => {
  console.log('id: ', id);
  const overlayRef = useRef(null);
  const closeModalRef = useRef(null);
  const [commentsData] = useCommentsData(id);
  const [post, comments] = commentsData;
  console.log('comments: ', comments);
  console.log('dataComments: ', commentsData);


  const [hasDataPost, setHasDataPost] = useState(!!commentsData.length);
  console.log('hasDataPost: ', hasDataPost);

  const handleClick = e => {
    const target = e.target;

    if (
      // закрывает модалку при клике на оверлей
      target === overlayRef.current ||
      // закрывает модалку при клике на крестик
      closeModalRef.current.contains(target) ||
      // закрывает модалку при клике на Esc
      e.code === 'Escape'
    ) {
      closeModal();
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
    setHasDataPost(!!commentsData.length);
  }, [commentsData.length]);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {hasDataPost ? (
          <>
            <h2 className={style.title}>{post.title}</h2>
            <p className={style.author}>{post.author}</p>
            <FormComment />
            <Comments comments={comments}/>
          </>
        ) : <h3>Загрузка данных...</h3> }
        <button className={style.close} ref={closeModalRef}>
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
