import {messageAction} from './actions'

export interface MessagesState {
  messages: string[]
}

const initialState = {
  messages: []
}

export const messagesReducer = (state:MessagesState = initialState, action: messageAction) => {
  switch(action.type){
    case "ADD_MESSAGE": {
      return { ...state, messages: [ ...state.messages, action.payload]}
    }
    default: return state
  }
}
