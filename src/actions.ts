export type messageAction = {type: "ADD_MESSAGE", payload: string}
export const addMessage = (message:string):messageAction => ({
  type: "ADD_MESSAGE",
  payload: message
})
