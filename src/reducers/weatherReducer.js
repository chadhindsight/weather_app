import {FETCH_WEATHER} from  '../actions/actionIndex';

const weatherReducer = (state =[], action) => {
	switch(action.type) {
		case FETCH_WEATHER:
		// return data from requested url
			return [action.payload.data, ...state];
		default:
		return state;
	}
}

export default weatherReducer;