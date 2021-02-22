import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'satish',
      image: 'https://joeschmoe.io/api/v1/male/random',
      message: 'whats up',
    },
    {
      name: 'satish',
      image: 'https://joeschmoe.io/api/v1/female/random',
      message: 'whats going',
    },
    {
      message: 'hahahahah',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div>
      <p className="chatScreen_timestamp">
        YOU MATCH WITH THAT PERSON ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          placeholder="type the message"
        />
        <button onClick={handleSend} className="chatScreen_inputButton">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
