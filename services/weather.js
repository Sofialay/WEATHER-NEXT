import axios from 'axios';

// NOTE: No dar la api key, guardar en .env
const apiKey = 'e5e2ab54cb1b8ea725a2d58b6beca2ec';

const baseUrl = (cityName) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const iconUrl = (iconCode) =>
  `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

export const getWeatherByCity = async (city) => {
  const res = await axios.get(baseUrl(city));
  return res.data;

  // same as 
  // const { data: res } = await axios(baseUrl(city))
};

export const getWeatherIcon = (iconCode) => iconUrl(iconCode)