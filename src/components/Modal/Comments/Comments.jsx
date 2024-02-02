import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
// import Time from '../../Main/List/Post/Time/Time';

export const Comments = (data) => {
  console.log('data: ', data);
  const comments = data.comments;
  console.log('comments: ', comments);


  return (
    <div style={style.data}>
      {comments.map((item, i) => (
        <>
          <Text As='li' key={i} body={item.body}>
            {item.body}
          </Text>
          <p className={style.author}>{item.author}</p>
          {/* <Time date={item.created} /> */}
        </>
      ))}
    </div>
  );
};
