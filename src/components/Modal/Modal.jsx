import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';

export const Modal = ({title, author, markdown, closeModal}) => {
  const overlayRef = useRef(null);
  const closeModalRef = useRef(null);

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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.conent}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {markdown}
          </Markdown>
        </div>
        <p className={style.author}>{author}</p>
        <button className={style.close} ref={closeModalRef}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
