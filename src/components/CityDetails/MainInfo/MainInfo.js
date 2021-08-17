import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MainInfo.scss';
import windArrow from '../../../icons/arrow.png';

export const MainInfo = ({ city, cityName }) => {
/* eslint-disable */
// eslint recommends use destructuring but this will make reading the code worse
  const icon = city.current.weather[0].icon;
  const date = new Date(city.current.dt * 1000);
  const temp = Math.round(city.current.temp);
  const weatherDescription = city.current.weather[0].description;
  const feelLikes = Math.round(city.current.feels_like);
  const humidity = city.current.humidity;
  const windSpeed = city.current.wind_speed.toFixed(1);
  const windDeg = city.current.wind_deg + 180;
  const visibilityTo = (city.current.visibility / 1000).toFixed(1);
  const pressure = city.current.pressure;
  const UVindex = city.current.uvi;
  const dewPoint = city.current.dew_point.toFixed(1);
  const clouds = city.current.clouds;
  const sunrise = new Date(city.current.sunrise * 1000);
  const sunset = new Date(city.current.sunset * 1000);

  /* eslint-enable */
  return (
    <div className="CityDetails__main">
      <Link className="CityDetails__main__back" to="/">Back</Link>
      <h1 className="CityDetails__main__cityName">{cityName}</h1>
      <h1 className="CityDetails__main__temp">
        {temp}
        &deg;
      </h1>
      <img
        className="CityDetails__main__icon"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />
      <h4 className="CityDetails__main__description">{weatherDescription}</h4>
      <ul className="CityDetails__main__info">
        <li className="CityDetails__main__info-item">
          Feels like:
          {feelLikes}
          &deg;
        </li>
        <li className="CityDetails__main__info-item">
          Humidity:
          {humidity}
          %
        </li>
        <li className="CityDetails__main__info-item">
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
        <li className="CityDetails__main__info-item">
          Visibility:
          {visibilityTo}
          km
        </li>
        <li className="CityDetails__main__info-item">
          Presure:
          {pressure}
          hPa
        </li>
        <li className="CityDetails__main__info-item">
          UV index:
          {UVindex}
        </li>
        <li className="CityDetails__main__info-item">
          Dew point:
          {dewPoint}
          &deg;
        </li>
        <li className="CityDetails__main__info-item">
          Clouds:
          {clouds}
          %
        </li>
        <li className="CityDetails__main__info-item">
          Sunrise:
          {sunrise.toLocaleTimeString('en-US')}
        </li>
        <li className="CityDetails__main__info-item">
          Sunset:
          {sunset.toLocaleTimeString('en-US')}
        </li>
      </ul>
      <p className="CityDetails__main__date">{date.toLocaleString('en-GB')}</p>
    </div>
  );
};

MainInfo.propTypes = {
  city: PropTypes.shape().isRequired,
  cityName: PropTypes.string.isRequired,
};
