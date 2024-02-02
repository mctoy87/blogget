import style from './FormComment.module.css';

export const FormComment = () => {
  console.log('style: ', style);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('e: ', e.target);
    // console.log(form);
  };

  return (
    <div>
      <form>
        {/* <label htmlFor="pushComment">Отправить комментарий</label> */}
        <textarea
          id="pushComment"
          name="pushComment"
          rows="5"
          cols="33"
        >
          Напиши свой комментарий
        </textarea>

        <button type='submit' onClick={(e) => handleFormSubmit(e)}>
          Отправить
        </button>
      </form>
    </div>
  );
};
