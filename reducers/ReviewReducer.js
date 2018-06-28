import {
  SUBMIT_REVIEW,
  SUBMIT_REVIEW_SUCCESS,
  CLEAR_REVIEW,
  FETCH_USER_REVIEWS
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  submitted: false
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_REVIEW:
      return { ...state, loading: true };
    case SUBMIT_REVIEW_SUCCESS:
      return { loading: false, submitted: true };
    case CLEAR_REVIEW:
      return INITIAL_STATE;
    case FETCH_USER_REVIEWS:
      return { ...state, ...INITIAL_STATE, userReviewList: action.payload };
    default:
      return state;
  }
}