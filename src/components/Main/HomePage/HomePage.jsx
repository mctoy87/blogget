import style from './HomePage.module.css';

export const HomePage = () => (
  <div className={style.container}>
    <h2 className={style.title}>Стартовая страница</h2>
    <p className={style.text}>Добро пожаловать!</p>
    <p>Выберите категорию</p>
  </div>
);
