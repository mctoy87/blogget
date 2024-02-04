import style from './FormComment.module.css';

export const FormComment = () => {
  console.log('style: ', style);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('formDataGET: ', formData.get('pushComment'));
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        {/* <label htmlFor="pushComment">Отправить комментарий</label> */}
        <textarea
          id="pushComment"
          name="pushComment"
          rows="5"
          cols="33"
        >
        </textarea>

        <button type='submit'>
          Отправить
        </button>
      </form>
    </div>
  );
};
