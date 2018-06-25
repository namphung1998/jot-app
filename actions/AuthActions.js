import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  CREATE_USER,
  CREATE_USER_SUCCESS
} from './types';

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

export function emailChange(text) {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
}

export function passwordChange(text) {
  return {
    type: PASSWORD_CHANGE,
    payload: text,
  };
}

function loginUserSuccess(dispatch, user, token) {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { user, token }
  });
}

function loginUserFail(dispatch) {
  dispatch({ type: LOGIN_USER_FAIL });
}

export function loginUser({ email, password }) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });


    try {
      let { data } = await axios({
        url: `${ROOT_URL}/login`,
        method: 'post',
        data: { email, password }
      });

      console.log(data.user);

      await AsyncStorage.setItem('token', data.auth_token);

      loginUserSuccess(dispatch, data.user, data.auth_token );
    } catch (err) {
      console.log(err);
      loginUserFail(dispatch);
    }
  }
}

export function createUser({ userName, email, password, passwordConfirm }) {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER });

    try {
      let { data } = await axios({
        url: `${ROOT_URL}/users`,
        method: 'post',
        data: {
          name: userName,
          email: email.toLowerCase(),
          password,
          password_confirmation: passwordConfirm
        }
      });

      await AsyncStorage.setItem('token', data.auth_token);

      createUserSuccess(dispatch, data.user, data.auth_token);

    } catch (err) {
      console.log(err);
    }
  }
}

function createUserSuccess(dispatch, user, token) {
  dispatch({ type: CREATE_USER_SUCCESS, payload: { user, token } })
}
