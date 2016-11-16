import { LOGIN, USER_STATUS } from '../actions/Login';

const initialState = {
  USER_STATUS: USER_STATUS.ANONYMOUS
}

function loginApp(state = initialState, action){
  switch (action.type){
    case LOGIN:
      return Object.assign({}, state, {
        USER_STATUS: USER_STATUS.AUTHENTICATED
      })
    default:
      return state;
  }
}