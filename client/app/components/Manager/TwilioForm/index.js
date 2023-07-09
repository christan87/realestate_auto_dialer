/*
* ContactList
*/ 

import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

const formStyle = {
    maxWidth: '400px',
    minHeight: '170px',
    maxHeight: '500px',
    border: 'solid black 1px',
    backgroundColor: 'grey',
    marginTop: '.5rem',
};

const formItemsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    formInput: {
        minWidth: '75%'
    },
    formButton: {
        width: 'fit-content'
    }
};

const TwilioForm = props => {
    const { sendMessage } = props;
    const[recipient, setRecipient] = useState('');
    const[textMessage, setTextMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        const twilioText = {
            recipient,
            textMessage
        };
        sendMessage(twilioText);
    }
    return(
        <div className='twilio-form' style={formStyle}>
            <h1>Twilio Form</h1>
            <form style={formItemsStyle} onSubmit={handleSendMessage}>
                <label>To:</label>
                <input
                    type='text'
                    value={recipient}
                    style={formItemsStyle.formInput}
                    onChange={e => setRecipient(e.target.value)}
                />
                <br />
                <label>Message:</label>
                <textarea
                    value={textMessage}
                    style={formItemsStyle.formInput}
                    onChange={e => setTextMessage(e.target.value)}
                />
                <br />
                <div>
                    <button style={formItemsStyle.formButton} type='submit'>Send Text</button>
                    <button style={formItemsStyle.formButton} type='button' onClick={(e)=>{alert('call btn clicked!')}}>Call Contact</button>
                </div>

            </form>
        </div>
    );
}

export default TwilioForm;