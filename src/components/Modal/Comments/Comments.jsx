import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import Time from '../../Main/List/Post/Time/Time';
import {generateRandomId} from '../../../utils/generateRandomId';


export const Comments = (data) => {
  (data) && (
    <div style={style.content}>
      <p>Нет комментариев</p>
    </div>
  );

  console.log('data: ', data);
  const comments = data.comments;
  console.log('comments: ', comments);


  return (
    <div style={style.data}>
      {comments.length ? (<h3>Комментарии</h3>) : (<h3>Нет комментариев</h3>)}
      {comments.map((item) => (
        <>
          <Text As='li' key={item.id} body={item.body}>
            {item.body}
          </Text>
          {<p key={generateRandomId()}
            className={style.author}>{item.author}</p>}
          <Time key={item.created} date={item.created_utc} />
        </>
      ))}
    </div>
  );
};
