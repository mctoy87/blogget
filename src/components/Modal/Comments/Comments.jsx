import style from './Comments.module.css';
import Time from '../../Main/List/Post/Time/Time';


export const Comments = (data) => {
  (data) && (
    <div style={style.content}>
      <p>Нет комментариев</p>
    </div>
  );

  const comments = data.comments;

  return (
    <ul style={style.data}>
      {comments.length ? (<h3>Комментарии</h3>) : (<h3>Нет комментариев</h3>)}
      {comments.map((item) => (
        <li key={item.id}>
          {item.body}
          {<p className={style.author}>{item.author}</p>}
          <Time date={item.created_utc} />
        </li>
      ))}
    </ul>
  );
};
