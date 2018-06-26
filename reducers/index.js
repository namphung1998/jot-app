import { combineReducers } from 'redux';
import auth from './AuthReducer';
import prompts from './PromptReducer';
import submission from './SubmissionReducer';

export default combineReducers({
  auth,
  prompts,
  submission,
})
