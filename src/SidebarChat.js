import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        
        <Avatar src='./buckets.jpg' />

        <div className='sidebarChat__info'>
        
            <h2>Jimmy Buckets</h2>
            <p>Last seen at ...</p>
        
        </div>

    </div>
  )
}

export default SidebarChat