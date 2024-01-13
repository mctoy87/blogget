import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

// eslint-disable-next-line arrow-body-style
export const Heading = ({text}) => {
  return (
    <Text As='h1' size={22} tsize={26} center className={style.heading}>
      {text}
    </Text>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
