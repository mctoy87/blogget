import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';

export const Modal = () => {
  console.log('style: ', style);
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}></h2>
        <div className={style.conent}>content</div>
        <p className={style.author}>author</p>
        <button className={style.close}>
          <CloseIcon/>
        </button>
      </div>
    </div>
  );
};
