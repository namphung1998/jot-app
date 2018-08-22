import {
  FETCH_MEMBERSHIPS,
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
    case FETCH_MEMBERSHIPS:
      return { ...state, loading: true };
    case FETCH_CIRCLES:
      return { ...INITIAL_STATE, circles: action.payload }
    default:
      return state;
  }
}
