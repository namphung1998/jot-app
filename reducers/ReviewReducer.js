import {
  MAKE_SUBMISSION,
  MAKE_SUBMISSION_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  submitted: false
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case MAKE_SUBMISSION:
      return { ...state, loading: true };
    case MAKE_SUBMISSION_SUCCESS:
      return { loading: false, submitted: true };
    default:
      return state;
  }
}