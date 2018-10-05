import axios from 'axios';

const API_KEY = '18436a5aee03555399b6774854293b06';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city)=> {
	const url = `${ROOT_URL}&q=${city},us&cnt=5`;
	const request = axios.get(url);

	//Log related city data to console to check if call is working
	console.log('Request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
