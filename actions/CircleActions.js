import axios from 'axios';
import {
  FETCH_CIRCLES,
  CREATE_CIRCLE,
  CREATE_CIRCLE_SUCCESS
} from './types';

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

export function fetchCircles() {
  return async (dispatch, getState) => {
    const { user, token } = getState().auth;

    try {
      let { data } = await axios({
        url: `${ROOT_URL}/users/${user.id}/circles`,
        method: 'get',
        headers: { Authorization: token }
      });

      console.log(data);

      let payload = [];

      for (let i = 0; i < data.length; i++) {
        const circle = data[i];
        console.log(circle);
        axios({
          url: `${ROOT_URL}/circles/${circle.circle_id}`,
          method: 'get',
          headers: { Authorization: token }
        })
          .then(({ data }) => {
            console.log(data);
            payload.push(data.name);
          })
      }

      console.log(payload);


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
