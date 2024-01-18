import style from './Logout.module.css';
import PropTypes from 'prop-types';

export const Logout = ({delToken}) => (
  <button
    className={style.logout}
    color='white'
    onClick={() => {
      delToken();
    }}
  >
    Выйти
  </button>
);

Logout.propTypes = {
  delToken: PropTypes.func,
};
