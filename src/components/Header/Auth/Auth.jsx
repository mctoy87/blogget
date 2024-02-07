import {useContext, useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  // const store = useStore();
  // const delToken = store.getState().token;
  const dispatch = useDispatch();

  const [isShowLogout, setIsShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setIsShowLogout(!isShowLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    // delToken();
    clearAuth();
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
