import style from './Header.module.css';
import Layout from '../Layout';
<<<<<<< HEAD
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
 
export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text='Главная'/>
          <Search/>
          <Auth auth={false}/>
        </div>
=======

export const Header = () => {
  return (
    <header>
      <Layout>
        Привет
>>>>>>> 3dd58f0aeb6adc285c4140aac22fc00daac6de84
      </Layout>
    </header>
    )
}