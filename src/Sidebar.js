import React from 'react';
import "./Sidebar.css";
//material ui icons 
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            
            <div className='sidebar__headerLeft'>
                <Avatar src='./kobe.jpg'/>
            </div>
            

            <div className='sidebar__headerRight'>

                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
        </div>

        <div className='sidebar__search'>

            <div className='sidebar__searchContainer'>
                <SearchIcon />
                <input placeholder='Search or start new chat' type='text'/>
            </div>

        </div>

        <div className='sidebar__chats'>

            <SidebarChat />

        </div>


    </div>
  )
}

export default Sidebar