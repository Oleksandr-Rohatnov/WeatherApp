
export function getCity(city) {
  // eslint-disable-next-line max-len
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cef83cd5d4c97545246b047882ffad61&units=metric`)
    .then(response => response.json());
}

export function getCityDetails(x, y) {
  // eslint-disable-next-line max-len
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&exclude=minutely&appid=cef83cd5d4c97545246b047882ffad61&units=metric`)
    .then(response => response.json());
}
