import { IoChatbubblesSharp } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';

import search from '../../assets/icon_search.svg';
import support from '../../assets/icon_support.svg';
import arrowDown from '../../assets/icon_arrow-down.svg';
import avatar from '../../assets/avatar.png';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <p className="logo__text">IMPEKABLE</p>
        </div>

        <div className="header__main-wrapper">
          <div className="header__search">
            <img src={search} alt="Search" width={16} height={16} className="header__search-icon" />
            <input
              type="text"
              placeholder="Search transactions, invoices or help"
              className="header__search-input"
            />
          </div>

          <div className="header__user-wrapper">
            <div className="header__wrapper-actoins">
              <div role="button" className="header__acion-button">
                <img src={support} alt="Support" width={16} height={16} />
              </div>
              <div role="button" className="header__acion-button">
                <IoChatbubblesSharp size={16} />
              </div>
              <div role="button" className="header__acion-button">
                <FaBell size={16} />
              </div>
            </div>

            <div className="header__user">
              <p className="header__user-name">John Doe</p>
              <div role="button" className="header__user-button">
                <img src={arrowDown} alt="Arrow down" width={11} />
              </div>
              <div className="header__user-avatar">
                <img src={avatar} alt="Avatar" width={38} height={38} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
