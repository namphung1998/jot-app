import {
  FETCH_PROMPTS
} from "../actions/types";

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROMPTS:
      return action.payload;
    default:
      return state;
  }
}