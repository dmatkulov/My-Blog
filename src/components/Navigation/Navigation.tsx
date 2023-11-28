import React from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
  name: string
  location: string;
}
const Navigation: React.FC<Props> = ({name, location}) => {
  return (
    <li>
      <NavLink to={`/${location}`}
               className="hover:text-orange-500"
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Navigation;