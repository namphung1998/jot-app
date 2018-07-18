import axios from 'axios';
import {
  SUBMIT_REVIEW,
  SUBMIT_REVIEW_SUCCESS,
  CLEAR_REVIEW,
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';


export function submitReview({ prompt, submission, body }) {
  return async (dispatch, getState) => {
    let { user, token } = getState().auth;

    try {
      dispatch({ type: SUBMIT_REVIEW });

      await axios({
        url: `${ROOT_URL}/prompts/${prompt.id}/submissions/${submission.id}/reviews`,
        method: 'post',
        data: {
          user_id: user.id,
          body
        },
        headers: { Authorization: token }
      });

      submitReviewSuccess(dispatch);
    } catch (err) {
      console.log(err);
    }
  }
}

function submitReviewSuccess(dispatch) {
  dispatch({ type: SUBMIT_REVIEW_SUCCESS });
}

export function clearReview() {
  return { type: CLEAR_REVIEW };
}
