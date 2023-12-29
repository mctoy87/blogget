import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
export const ComponentFunc = React.memo((props) => {
  console.log('_____________________');
  console.log('ComponentFunc');
  return <p className={style.text}>{props.string}</p>;
});

ComponentFunc.propTypes = {
  string: PropTypes.string,
};
