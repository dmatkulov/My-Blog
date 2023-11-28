import React from 'react';
import Navigation from '../Navigation/Navigation';

const Toolbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        <Navigation
          name="Home"
          location=""
        />
        <Navigation
          name="Add"
          location="new-post"
        />
        <Navigation
          name="About"
          location="about"
        />
        <Navigation
          name="Contacts"
          location="contacts"
        />
      </ul>
    </nav>
  );
};

export default Toolbar;