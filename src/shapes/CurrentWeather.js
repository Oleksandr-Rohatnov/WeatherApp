import PropTypes from 'prop-types';

export const currentWeather = {
  weather: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))).isRequired,
  main: PropTypes.objectOf(PropTypes.shape({
    temp: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  })).isRequired,
  wind: PropTypes.objectOf(PropTypes.shape({
    speed: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
  })).isRequired,
  visibility: PropTypes.number.isRequired,
};
