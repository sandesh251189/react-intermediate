import axios from 'axios';
const API_KEY='9ef1ddcd5bffd9b30a75a91be6af9475';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER ="FETCH_WEATHER";
export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},india`;
  const request=axios.get(url)
  console.log("Request" , request)
  return {
    type:FETCH_WEATHER,
    payload:request
  }
}
