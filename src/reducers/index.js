import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer';

// A reducer is a function that returns a piece of app state
const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
