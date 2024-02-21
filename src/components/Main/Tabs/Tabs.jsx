import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assighnRandomId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HomewIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useNavigate} from 'react-router-dom';

import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Главная', Icon: HomewIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assighnRandomId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropDown] = useState(true);
  const [itemMenu, setItemMenu] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {itemMenu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {LIST.map(({value, link, id, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setItemMenu(value);
                  navigate(`/category/${link}`);
                }}
              >
                {value}
                <Icon width={25} height={25}/>
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
