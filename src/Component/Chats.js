import React from 'react';
import Chat from './Chat';
// import Chat from './Chat';
import './Chats.css';

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Osama"
        message="i am still alive"
        timestamp="1 min ago"
        profilePic="https://joeschmoe.io/api/v1/male/random"
      />
      <Chat
        name="Osama"
        message="i am still alive"
        timestamp="1 min ago"
        profilePic="https://joeschmoe.io/api/v1/female/random"
      />
      <Chat
        name="Osama"
        message="i am still alive"
        timestamp="1 min ago"
        profilePic="https://joeschmoe.io/api/v1/random"
      />
      <Chat name="Osama" message="i am still alive" timestamp="1 min ago" />
    </div>
  );
}

export default Chats;
