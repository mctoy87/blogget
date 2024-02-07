// import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';


export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();


  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
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
