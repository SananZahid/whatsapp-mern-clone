import React, { useState } from 'react';
import "./ChatComponent.css";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';
import SidebarChat from './SidebarChat';

function ChatComponent( {messages} ) {

  const [input ,setInput] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Sanan",
      received: false,
    });

    setInput("");
  };


  return (

    <div className='chat'>

        <div className='chat__header'>

            {/* <SidebarChat /> */}
            
            <Avatar src='./buckets.jpg' />

            <div className='chat__headerInfo'>
              
              <h3>Jimmy Buckets</h3>
              <p>Last seen at ...</p>

            </div>

            

            <div className='chat__headerRight'>
              <IconButton>
                <SearchIcon />
              </IconButton>

              <IconButton>
                <AttachFileIcon />
              </IconButton>

              <IconButton>
                <MoreVertIcon />
              </IconButton>

            </div>
        </div>

        <div className='chat__body'> 
            {messages.map((message) => (

              <p className={`chat__message ${message.received && "chat__receiver"}`}>

              <span className='chat__name'>{message.name} </span>
              {message.message} 
              <span className='chat__timestamp'>
                {new Date().toUTCString()}
              </span>

              </p>

            ))}

              {/* <p className='chat__message chat__receiver'>

              <span className='chat__name'>Kobe </span>
              his is a message 
              <span className='chat__timestamp'>
                {new Date().toUTCString()}
              </span>

              </p> */}
            

        </div>

        <div className='chat__footer'>

            <InsertEmoticonIcon />

            <form>
              <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder='Type a message' type='text' />

              <button 
                type='submit' 
                onClick={sendMessage}>
                Send a message
              </button>

            </form>

            <MicIcon />

        </div>

    </div>
  )
}

export default ChatComponent