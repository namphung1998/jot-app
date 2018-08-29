import axios from 'axios';
import _ from 'lodash';
import {
  FETCH_MEMBERSHIPS,
  FETCH_CIRCLES,
  CREATE_CIRCLE,
  CREATE_CIRCLE_SUCCESS
} from './types';

const ROOT_URL = require('../constants');

function createCircleSuccess(dispatch) {
  dispatch({ type: CREATE_CIRCLE_SUCCESS });
}

export const createCircle = ({ name, desc, privacy }) => async (dispatch, getState) => {
  const { token, user } = getState().auth;

  try {
    dispatch({ type: CREATE_CIRCLE });

    await axios({
      url: `${ROOT_URL}/circles`,
      method: 'post',
      data: { name, desc, privacy, user_id: user.id },
      headers: { Authorization: token }
    });

    createCircleSuccess(dispatch);
  } catch (err) {
    console.log(err);
  }
}

export const fetchCircles = () => async (dispatch, getState) => {
  const { token, user } = getState().auth;

  try {
    dispatch({ type: FETCH_MEMBERSHIPS });

    let { data } = await axios({
      url: `${ROOT_URL}/users/${user.id}/circles`,
      method: 'get',
      headers: { Authorization: token }
    });

    let result = await Promise.all(_.map(data, async (item, i) => {
      let response = await axios({
        url: `${ROOT_URL}/circles/${item.circle_id}`,
        method: 'get',
        headers: { Authorization: token }
      });

      return response.data;
    }));

    dispatch({ type: FETCH_CIRCLES, payload: result });
  } catch (err) {
    console.log(err);
  }
}
