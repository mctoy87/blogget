import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = () => {
  const [isShowLogout, setIsShowLogout] = useState(false);
  const [auth, clearAuth] = useAuth();

  const dispatch = useDispatch();

  const getOut = () => {
    setIsShowLogout(!isShowLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
    console.log('auth: ', auth);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}
            onClick={() => setIsShowLogout(getOut)}
          >
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {isShowLogout && (
            <button className={style.logout} onClick={logOut}>Выйти</button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};
