import axios from 'axios';
import {
  SUBMIT_REVIEW,
  SUBMIT_REVIEW_SUCCESS
} from "./types";

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

export function submitReview({ prompt, submission, user, token, body }) {
  return async (dispatch) => {
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