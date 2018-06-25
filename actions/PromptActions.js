import axios from 'axios';
import {
  FETCH_PROMPTS
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

export function fetchPrompts(token) {
  return async (dispatch) => {
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
}