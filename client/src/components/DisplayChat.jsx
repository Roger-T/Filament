import React from 'react';

const DisplayChat = props => {
    const { conversation } = props;
 
    const showConversation = () => {
        const replies = conversation.map((chatEntry, index) => {
            return (
                <div key={index} className={chatEntry.sentBy}>
                    <p>{chatEntry.text}</p>
                </div>
            )
        })
        return replies;
    }

    return (
        <div className="responses">
            {showConversation()}
        </div>
    )
}

export default DisplayChat