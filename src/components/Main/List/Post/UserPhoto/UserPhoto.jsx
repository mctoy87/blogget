import style from './UserPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const UserPhoto = ({title, thumbnail}) => (
  <img
    className={style.img}
    src={(thumbnail !== 'default') ? (thumbnail) : (notphoto)}
    alt={title}
  />
);

UserPhoto.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
