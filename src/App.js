import React, { useEffect, useState } from "react";
import './App.css';
import ChatComponent from "./ChatComponent";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/messages/sync')
    .then((res) => {
      
      setMessages(res.data);

    })
  },[]);

  // Inside a useEffect to run on change
  useEffect(() => {

    // Code from pusher get started

    const pusher = new Pusher('1b0545bb9e63a4260c83', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    // To close listener inside of pusher 
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      
      <div className="app__Body">

        {/* Sidebar */}
        <Sidebar />

        {/* ChatComponent */}
        <ChatComponent messages={messages}/>

      </div>
      

    </div>
  );
}

export default App;
