import {
  FETCH_CIRCLES,
  CREATE_CIRCLE,
  CREATE_CIRCLE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  circles: []
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_CIRCLE:
      return { ...state, loading: true };
    case CREATE_CIRCLE_SUCCESS:
      return { ...state, loading: false };
    case FETCH_CIRCLES:
      return { ...state, ...INITIAL_STATE, circles: action.payload }
    default:
      return state;
  }
}
