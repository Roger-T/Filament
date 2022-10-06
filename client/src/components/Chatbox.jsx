import React from 'react';

const InputBox = props => {
    const { 
        startingValue,
        sendChat,
        storeChat
    } = props;

    return (
        <form onSubmit={sendChat} className="formStyle">
            <textarea onChange={storeChat} placeholder={startingValue} className="boxStyle"></textarea>
            <button type="submit" className="buttonStyle">Submit</button>
        </form>
    )
}

export default InputBox;
