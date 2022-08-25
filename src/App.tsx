import React from 'react';
import { NewMessageInput } from './newMessageComponent';
import { useSelector, useDispatch } from 'react-redux';
import { MessagesState } from './messagesReducer';
import { addMessage } from './actions'
import { ImageViewing } from './imageViewer'

function App() {
  const messages = useSelector<MessagesState, MessagesState["messages"]>((state) => state.messages)
  const dispatch = useDispatch()

  const onAddMessage = (message:string)=>{
    dispatch(addMessage(message))
  }

  return (
    <>
      <NewMessageInput addMessage={onAddMessage}/>
      <ul>
        <ImageViewing/>
        {
          messages.map((message)=> {
            return <li key={message}>{message}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
