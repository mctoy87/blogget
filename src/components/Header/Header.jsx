import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
export const Header = ({token}) => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text='Главная'/>
          <Search/>
          <Auth token={token}/>
        </div>
      </Layout>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
};
