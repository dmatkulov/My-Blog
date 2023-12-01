import React from 'react';
import Title from '../../components/Title/Title';

const About: React.FC = () => {
  return (
    <div>
      <Title title="Culinary Chronicles"/>
      <div className="">
        <p className="mx-auto">
          Добро пожаловать в Culinary Chronicles, где каждый прием пищи становится настоящим кулинарным приключением!
          Наш блог посвящен исследованию мировой кухни и открытию тайн кулинарного мастерства.
          Мы стремимся поделиться с вами увлекательными историями о том, как разные культуры объединяются через еду,
          создавая настоящий мозаичный калейдоскоп вкусов и ароматов.
        </p>
      </div>
    </div>
  );
};

export default About;