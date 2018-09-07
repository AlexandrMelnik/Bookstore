import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const signin = credentials => dispatch =>
  api.user.signin(credentials).then(user => {
    localStorage.userToken = user.token;
    dispatch(userLoggedIn(user))
});

export const logout = () => dispatch => {
  localStorage.removeItem("userToken");
  dispatch(userLoggedOut())
};
