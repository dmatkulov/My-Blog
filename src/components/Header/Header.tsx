import React from 'react';
import {NavLink} from 'react-router-dom';
import Toolbar from '../Toolbar/Toolbar';
import myBlogLogo from '../../assets/myBlog-logo.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between bg-amber-100 p-6 rounded-lg mt-3">
      <div>
        <NavLink to='/'>
          <img
            src={myBlogLogo}
            alt="my-blog-logo"/>
        </NavLink>
      </div>
      <Toolbar/>
    </header>
  );
};

export default Header;