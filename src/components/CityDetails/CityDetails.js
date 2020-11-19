/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCity, getCityDetails } from '../../API/getWeather';
import './CityDetails.scss';
import { MainInfo } from './MainInfo/MainInfo';
import { OtherInfo } from './OtherInfo/OtherInfo';

export const CityDetails = ({ match }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    getCity(match.params.city)
      .then(result => getCityDetails(result.coord.lat, result.coord.lon)
        .then(setCity));
  }, []);

  return (city
    ? (
      <div className="CityDetails">
        <MainInfo city={city} cityName={match.params.city} />
        <OtherInfo city={city} />
      </div>
    )
    : <div className="loaderBox"><h1>Loading...</h1></div>
  );
};

CityDetails.propTypes = {
  match: PropTypes.object,
};
