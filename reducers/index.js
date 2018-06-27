import { combineReducers } from 'redux';
import auth from './AuthReducer';
import prompts from './PromptReducer';
import submission from './SubmissionReducer';
import review from './ReviewReducer'

export default combineReducers({
  auth,
  prompts,
  submission,
  review
})
