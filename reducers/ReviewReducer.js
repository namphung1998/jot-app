import {
  SUBMIT_REVIEW,
  SUBMIT_REVIEW_SUCCESS
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
    default:
      return state;
  }
}