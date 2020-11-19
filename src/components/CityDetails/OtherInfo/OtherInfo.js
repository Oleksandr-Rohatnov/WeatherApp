import PropTypes from 'prop-types';
import './OtherInfo.scss';
import React from 'react';

export const OtherInfo = ({ city }) => (
  <div className="CityDetails__other">
    <div className="CityDetails__other__hourly">
      <h2>Hourly:</h2>
      <div className="CityDetails__other__time">
        {city.hourly.slice(0, 12).map(hour => (
          <p key={hour.dt} className="CityDetails__other__time-item">
            {new Date(hour.dt * 1000).getHours()}
          </p>
        ))}
      </div>
      <div className="CityDetails__other__time__icons">
        {city.hourly.slice(0, 12).map(hour => (
          <img
            alt="/"
            src={
              `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`
            }
            className="CityDetails__other__time__icons-item"
          />
        ))
        }
      </div>
      <ul className="CityDetails__other__hourly__table">
        {city.hourly.slice(0, 12).map(hour => (
          <>
            <li
              className="CityDetails__other__hourly__table-item"
              style={{
                bottom: `${hour.temp * 1.5}px`,
                /* eslint-disable */
                //Do not nest ternary expressions

                color: `${
                  hour.temp >= 29
                    ? 'red'
                    : hour.temp >= 0
                      ? 'black'
                      : 'black'
                }`,
                backgroundColor: `${
                  hour.temp > 0
                    ? `hsl(41, 100%, ${90 - hour.temp}%)`
                    : hour.temp <= 0
                      ? `hsl(185, 100%, ${70 - hour.temp}%)`
                      : ''
                }`,
              }}
              /* eslint-enable */
            >
              {Math.round(hour.temp)}
              &deg;
            </li>
          </>
        ))}
      </ul>
    </div>
    <div className="CityDetails__other__daily">
      <h2>Daily:</h2>
      <div className="CityDetails__other__day">
        {city.daily.map(day => (
          <p className="CityDetails__other__day-item">
            {new Date(day.dt * 1000).getDate()}
          </p>
        ))
        }
      </div>
      <div className="CityDetails__other__day__icons">
        {city.daily.map(day => (
          <img
            alt="/"
            src={
              `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            }
            className="CityDetails__other__day__icons-item"
          />
        ))}
      </div>
      <ul className="CityDetails__other__daily__table">
        {city.daily.map(day => (
          <>
            <li
              className="CityDetails__other__daily__table-item"
              style={{ bottom: `${day.temp.day * 1.5}px` }}
            >
              <p>
                {Math.round(day.temp.min)}
                &deg;
              </p>
              <p>
                {Math.round(day.temp.max)}
                &deg;
              </p>
            </li>
          </>
        ))}
      </ul>
    </div>
  </div>
);

OtherInfo.propTypes = {
  city: PropTypes.shape().isRequired,
};
