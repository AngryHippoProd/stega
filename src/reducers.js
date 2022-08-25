import { combineReducers } from 'redux'
import { messagesReducer } from './messagesReducer'
// import { imagesReducer } from './imagesReducer'

export const allReducers = combineReducers({
  message : messagesReducer,
})
// image   : imagesReducer
