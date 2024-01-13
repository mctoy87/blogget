import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthSvg} from './img/login.svg';

// eslint-disable-next-line arrow-body-style
export const Auth = ({auth}) => {
  return (
    <button className={style.button}>
      {auth ? (
        auth
      ) : (
        <AuthSvg className={style.svg}/>
      )}
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};
