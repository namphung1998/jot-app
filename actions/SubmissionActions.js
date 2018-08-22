import axios from 'axios';
import {
  MAKE_SUBMISSION,
  MAKE_SUBMISSION_SUCCESS,
  FETCH_SUBMISSIONS,
  SELECT_SUBMISSION,
  FETCH_USER_SUBMISSIONS
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

function makeSubmissionSuccess(dispatch) {
  dispatch({ type: MAKE_SUBMISSION_SUCCESS })
}

export function makeSubmission({ preface, body, prompt }) {
  return async (dispatch, getState) => {
    const { user, token } = getState().auth;

    try {
      dispatch({ type: MAKE_SUBMISSION });

      await axios({
        url: `${ROOT_URL}/prompts/${prompt.id}/submissions`,
        method: 'post',
        headers: { Authorization: token },
        data: {
          preface,
          body,
          user_id: user.id,
        }
      });

      makeSubmissionSuccess(dispatch);
    } catch (err) {
      console.log(err);
    }
  }
}

export function fetchSubmissions(prompt) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    try {
      let { data } = await axios({
        url: `${ROOT_URL}/prompts/${prompt.id}/submissions`,
        method: 'get',
        headers: { Authorization: token }
      });

      dispatch({ type: FETCH_SUBMISSIONS, payload: data });
    } catch (err) {
      console.log(err);
    }
  }
}

export const fetchUserSubmissions = (user) => async (dispatch, getState) => {
  const { token } = getState().auth;

  try {
    let { data } = await axios({
      url: `${ROOT_URL}/users/${user.id}/submissions`,
      method: 'get',
      headers: { Authorization: token },
    });

    dispatch({ type: FETCH_USER_SUBMISSIONS, payload: data });
  } catch (err) {
    console.log(err);
  }
}

export function selectSubmission(id) {
  return {
    type: SELECT_SUBMISSION,
    payload: id
  };
}
