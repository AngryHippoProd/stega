import React from 'react';
import {ChangeEvent} from 'react';

interface NewMessageInputProps{
  addMessage( message : string): void;
}
export const NewMessageInput:React.FC<NewMessageInputProps> = ({ addMessage }) => {
  const[message, setMessage] = React.useState('');
  const updateMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }
  const onMessageButtonClick = () =>{
    addMessage(message)
    setMessage("")
  }

  return (
    <div>
      <input type = "text" name="message"
             value = {message}
             onChange = {updateMessage}
             placeholder = "message"/>
      <button onClick = {onMessageButtonClick}> Add message </button>
    </div>
  );
};
