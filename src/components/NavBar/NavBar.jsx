import { NavLink } from 'react-router-dom';

import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { PiChatsBold } from 'react-icons/pi';
import { GrProjects } from 'react-icons/gr';

import { navList } from '../../data/navList';

import './NavBar.scss';

export const NavBar = () => {
  const neededIconComponent = (title, width) => {
    switch (title) {
      case 'Dashboard':
        return <BiSolidBarChartAlt2 size={width} color="#A5A4BF" />;

      case 'Customers':
        return <FaRegUser size={width} color="#A5A4BF" />;

      case 'Chat Room':
        return <PiChatsBold size={width} color="#A5A4BF" />;

      case 'Products':
        return <GrProjects size={width} color="#A5A4BF" />;

      default:
        return null;
    }
  };

  return (
    <aside className="nav-bar">
      <nav>
        <ul>
          {navList.map(({ title, icon, alt, width, height, linkTo }) => {
            return (
              <li key={title} className="nav-bar__item">
                <NavLink
                  to={linkTo}
                  className={`nav-bar__link  ${
                    title === 'Calendar' ? 'nav-bar__link--calendar' : ''
                  }`}
                >
                  {neededIconComponent(title, width) ? (
                    neededIconComponent(title, width)
                  ) : (
                    <img src={icon} alt={alt} width={width} height={height} />
                  )}

                  <p className="nav-bar__link-title">{title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
