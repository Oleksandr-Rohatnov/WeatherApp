import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';
import windArrow from '../../icons/arrow.png';
import { getCity } from '../../API/getWeather';
import { currentWeather } from '../../shapes/CurrentWeather';

export const Card = ({ deleteCity, cityState }) => {
  /* eslint-disable */
  // eslint recommends use destructuring but this will make reading the code worse

  const [city, setSity] = useState(cityState);
  const icon = city.weather[0].icon;
  const temp = Math.round(city.main.temp);
  const weatherDescription = city.weather[0].description;
  const feelLikes = Math.round(city.main.feels_like);
  const humidity = city.main.humidity;
  const windSpeed = city.wind.speed.toFixed(1);
  const windDeg = city.wind.deg + 180;
  const visibilityTo = (city.visibility / 1000).toFixed(1);
  /* eslint-enable */

  async function refreshValues(name) {
    const result = await getCity(name);

    if (result.cod === 200) {
      setSity(result);
    }
  }

  return (
    <div className="card">
      <h1>{city.name}</h1>
      <h2>{city.sys.country}</h2>
      <h1 className="card__temp">
        {temp}
        &deg;
      </h1>
      <img
        className="card__img"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />
      <h4 className="card__description">{weatherDescription}</h4>
      <ul className="card__info">
        <li className="card__info__item">
          Feels like:
          {feelLikes}
          &deg;
        </li>
        <li className="card__info__item">
          Humidity:
          {humidity}
          %
        </li>
        <li className="card__info__item">
          Wind:
          {windSpeed}
          m/s
          <img
            src={windArrow}
            alt="arrow"
            width={13}
            height={13}
            style={{ transform: `rotate(${windDeg}deg)` }}
          />
        </li>
        <li className="card__info__item">
          Visibility:
          {visibilityTo}
          km
        </li>
      </ul>
      <button
        className="card__button-Delete"
        onClick={() => deleteCity(city.name)}
        type="button"
      >
        X
      </button>
      <button
        type="button"
        className="card__button-Refresh"
        onClick={() => refreshValues(city.name)}
      >
        Refresh
      </button>
      <Link to={`/${city.name}`} className="card__button-more">DETAILS</Link>
    </div>

  );
};

Card.propTypes = {
  deleteCity: PropTypes.func.isRequired,
  cityState: PropTypes.shape(currentWeather).isRequired,
};
