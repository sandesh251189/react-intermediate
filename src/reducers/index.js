import { combineReducers } from 'redux';
import WeatherReducer from './reducers_weather';
import CitiesList  from './reducers_cities'
const rootReducer = combineReducers({
  weather:WeatherReducer,
  cities:CitiesList
});

export default rootReducer;
