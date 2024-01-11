import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assighnRandomId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomewIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utils/debounce';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomewIcon},
  {value: 'Сохраненные', Icon: PostIcon},
  {value: 'Мои посты', Icon: SaveIcon},
].map(assighnRandomId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropDown] = useState(true);

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
            add item
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button className={style.btn}>
                {value}
                <Icon width={25} height={25}/>
              </button>
            </li>
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
