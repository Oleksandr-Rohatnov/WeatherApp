import PropTypes from 'prop-types';
import React from 'react';

import { Card } from '../card/Card';
import './CardList.scss';

export const CardList = ({ cityList, deleteCity }) => (
  <div className="cardList">
    {cityList.map((city, i) => (
      <Card
        key={city.name}
        deleteCity={deleteCity}
        cityState={city}
      />
    ))
    }
  </div>
);

CardList.propTypes = {
  cityList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCity: PropTypes.func.isRequired,
};
