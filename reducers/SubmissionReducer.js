import {
  FETCH_SUBMISSIONS,
  MAKE_SUBMISSION,
  MAKE_SUBMISSION_SUCCESS,
  SELECT_SUBMISSION,
  FETCH_USER_SUBMISSIONS
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  submitted: false,
  submittedList: null,
  selectedId: null,
  userSubmittedList: null,
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case MAKE_SUBMISSION:
      return { ...state, loading: true };
    case MAKE_SUBMISSION_SUCCESS:
      return { ...state, loading: false, submitted: true };
    case FETCH_SUBMISSIONS:
      return { ...state, ...INITIAL_STATE, submittedList: action.payload };
    case SELECT_SUBMISSION:
      return { ...state, selectedId: action.payload };
    case FETCH_USER_SUBMISSIONS:
      return { ...state, ...INITIAL_STATE, userSubmittedList: action.payload };
    default:
      return state;
  }
}