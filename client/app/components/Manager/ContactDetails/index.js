/*
* ContactList
*/ 

import React from 'react';
import { Row, Col } from 'reactstrap';
import { detailCategorySeparator } from './util';

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

const ContactDetails = props => {
    const { contact } = props;
    const categories = ['Owner Info', 'Contact Info', 'Location Info', 'Technical Location Info'];
    const details = detailCategorySeparator(contact);
    const rowStyle ={
        marginBottom: '1rem'
    }
    return(
        <div className='contact-details'>
            {details.map((detail, detailIndex)=>(
                <Row key={`${detail}${detailIndex}`} style={rowStyle}>
                    <h1>{`${categories[detailIndex]}`}</h1>
                    {Object.keys(detail).map((field, index)=>(
                        <Col key={`${field}${index}`} xs='6' md={detailIndex === 1? '6' : '4'} lg={detailIndex === 1? '3' : '4'} >
                            <span><strong>{`${field}:`}</strong> {`${detail[field]}`}</span>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default ContactDetails;