import axios from 'axios';
import {
  FETCH_PROMPTS
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

export const fetchPrompts = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  try {
    let { data } = await axios({
      url: `${ROOT_URL}/prompts-all`,
      method: 'get',
      headers: { Authorization: token }
    });

    dispatch({ type: FETCH_PROMPTS, payload: data });
  } catch (err) {
    console.log(err);
  }
}
