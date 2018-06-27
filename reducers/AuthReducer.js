import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  INITIATE_AUTH
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  token: null,
  loggedIn: false
};

export default (state=INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case INITIATE_AUTH:
      return INITIAL_STATE;
    case EMAIL_CHANGE:
      return { ...state, email: action.payload }; //...state: create a new object with properties of state
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.user, token: action.payload.token, loggedIn: true };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Authentication Failed.', password: '' };
    case CREATE_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.user, token: action.payload.token };
    case LOGOUT_USER:
      console.log(state);
      return { ...state, loading: true, error: '' };
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE, loggedIn: false };
    default:
      return state;
  }
};
