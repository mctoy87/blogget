import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';

export const FormComment = () => {
  console.log('style: ', style);

  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_COMMENT',
      comment: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        {/* <label htmlFor="pushComment">Отправить комментарий</label> */}
        <textarea
          rows="5"
          cols="33"
          value={value}
          onChange={handleChange}
        >
        </textarea>

        <button type='submit'>
          Отправить
        </button>
      </form>
    </div>
  );
};
