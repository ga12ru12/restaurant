import { combineReducers } from 'redux';
import loginState from './LoginReducer';
import menu from './MenuReducer';

const restaurantApp = combineReducers({
  loginState,
  menu
})

export default restaurantApp;