import axios from 'axios';
import {
  FETCH_CIRCLES,
  CREATE_CIRCLE,
  CREATE_CIRCLE_SUCCESS
} from './types';

const ROOT_URL = require('../constants');

export function fetchCircles() {
  return async (dispatch, getState) => {
    const { user, token } = getState().auth;

    try {
      let { data } = await axios({
        url: `${ROOT_URL}/users/${user.id}/circles`,
        method: 'get',
        headers: { Authorization: token }
      });

      dispatch({ type: FETCH_CIRCLES, payload: data });
    } catch (err) {
      console.log(err);
    }
  }
}

function createCircleSuccess(dispatch) {
  dispatch({ type: CREATE_CIRCLE_SUCCESS });
}

export function createCircle({ name, desc, privacy }) {
  return async (dispatch, getState) => {
    const { token, user } = getState().auth;

    try {
      dispatch({ type: CREATE_CIRCLE });

      await axios({
        url: `${ROOT_URL}/circles`,
        method: 'post',
        data: {
          name,
          desc,
          privacy,
          user_id: user.id
        },
        headers: { Authorization: token }
      });

      createCircleSuccess(dispatch);
    } catch (err) {
      console.log(err);
    }
  }
}
