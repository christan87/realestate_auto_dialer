/*
* ContactList
*/ 

import React from 'react';
import { Link } from 'react-router-dom';

const contactStyle = {
    border: 'solid black 1px',
    display: 'flex',
    alignItems: 'flex-start',
    width: 'fit-content',
    marginTop: '.5rem'
};

const fieldStyle = {
    marginRight: '.25rem',
    borderRight: 'solid black 1px',
};
const ContactList = props => {
    const { contacts } = props;
    console.log('==============> contacts:', contacts);
    return(
        <div className='contact-list'>
            {contacts.map((contact, index) => (
                
                <Link 
                    key={`${contact}${index}`} 
                    style={contactStyle}
                    to={`/contact/${contact._id}`}
                >
                    {Object.keys(contact).slice(1, Object.keys(contact).length - 1).map((field, index) => (
                        field === 'owner1FirstName' || 
                        field === 'owner1LastName' || 
                        field === 'phone1' ||
                        field === 'phone2' ||
                        field === 'phone3' ?
                        <span key={`${field}${index}`} style={fieldStyle} >{`${field}: ${contact[field]}`}</span> 
                        : 
                        null
                    ))}
                </Link>
            ))}
        </div>
    );
}

export default ContactList;