import { combineReducers } from 'redux';
import auth from './AuthReducer';
import prompts from './PromptReducer';

export default combineReducers({
  auth,
  prompts
})
