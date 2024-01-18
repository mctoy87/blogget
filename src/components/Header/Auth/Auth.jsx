import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';
import {Logout} from './Logout/Logout';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isShowLogout, setIsShowLogout] = useState(false);

  useEffect(() => {
    if (!token) {
      if (auth.name) setAuth({});
      if (isShowLogout) setIsShowLogout(false);
      return;
    }

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn}
          onClick={() => setIsShowLogout(!isShowLogout)}
        >
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
      {isShowLogout && (
        <Logout delToken={delToken}></Logout>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
