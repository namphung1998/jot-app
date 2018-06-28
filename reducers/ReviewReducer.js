import {
  SUBMIT_REVIEW,
  SUBMIT_REVIEW_SUCCESS,
  CLEAR_REVIEW,
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
    default:
      return state;
  }
}