import {useEffect, useRef} from 'react';
import {postsRequestAsync} from '../../../../store/posts/postsAction';
import {useDispatch} from 'react-redux';
import style from './End.module.css';

export const End = () => {
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    endList.current && observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <div ref={endList} className={style.end}/>
  );
};
