import axios from 'axios';
import {
  MAKE_SUBMISSION,
  MAKE_SUBMISSION_SUCCESS
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

function makeSubmissionSuccess(dispatch) {
  dispatch({ type: MAKE_SUBMISSION_SUCCESS })
}

export function makeSubmission({ preface, body, token, user }) {
  return async (dispatch) => {
    try {
      dispatch({type: MAKE_SUBMISSION});

      await axios({
        url: `${ROOT_URL}/submissions`,
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