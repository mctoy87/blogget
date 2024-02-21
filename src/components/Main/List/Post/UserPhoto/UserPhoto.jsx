import style from './UserPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const UserPhoto = ({title, thumbnail}) => {
  const url = thumbnail.slice(0, 4);
  return (
    <img
      className={style.img}
      src={
        ((thumbnail !== 'default') && (url === 'http')) ?
          (thumbnail) : (notphoto)}
      alt={title}
    />
  );
};

UserPhoto.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
