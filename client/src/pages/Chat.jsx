import React, { useState, Fragment } from 'react';
import axios from 'axios';
import ChatInputbox from '../components/Chatbox';
import DisplayChat from '../components/DisplayChat'

const Chat = () => {
    // TODO build chat page
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const updateChatHistory = (e) => {
        e.preventDefault();
        updateMessageHistory();
    }

    const updateMessageHistory = async () => {
        if (userInput !== '') {
            const post = await axios.post('http://localhost:5000/api/chat', {
                message: userInput
                })
            setChatHistory(chatHistory.concat({
                'sentBy': 'human',
                'text': userInput
            },
            {
                'sentBy': 'bot',
                'text': post.data[0].text
            })
            )
        } else {
            return false;
        }
    }    
 
    return (
        <Fragment>
            <DisplayChat conversation={chatHistory}/>
            <ChatInputbox 
                storeChat={(e) => {setUserInput(e.target.value)}}
                sendChat={(e) => {updateChatHistory(e)}}
                startingValue="Please enter your question."
            />
        </Fragment>
    )
}

export default Chat;
