import style from './Logo.module.css';
import logo from './img/logo.svg';

// eslint-disable-next-line arrow-body-style
export const Logo = () => {
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={logo} alt="Логотип Blogget"/>
    </a>
  );
};
