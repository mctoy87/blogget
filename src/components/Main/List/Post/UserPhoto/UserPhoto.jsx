import style from './UserPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const UserPhoto = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

UserPhoto.propTypes = {
  title: PropTypes.string,
};
