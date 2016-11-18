import { combineReducers } from 'redux';
import loginApp from './LoginReducer';

const restaurantApp = combineReducers({
  loginApp
})

export default restaurantApp;