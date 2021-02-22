import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="shat_timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
