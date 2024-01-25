import style from './Time.module.css';
import formatDate from '../../../../../utils/formDate';
import PropTypes from 'prop-types';

const Time = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

export default Time;

Time.propTypes = {
  date: PropTypes.number,
};
