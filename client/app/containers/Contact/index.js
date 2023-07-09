/*
* Contact
*/

import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import ContactDetails from "../../components/Manager/ContactDetails";
import actions from '../../actions';

class Contact extends React.PureComponent {
    componentDidMount(){
        const { match } = this.props;
        const { id } = match.params;
        this.props.fetchContact(id);
    }
    render() {
        const {
            contact
        } = this.props;
        return(
            <div>
                <h1 style={{marginBottom: '1.5rem'}}> Contact: 
                    {contact !== undefined? 
                    contact.owner1FirstName !== undefined? 
                        `${contact.owner1FirstName} ${contact.owner1LastName}` 
                        : 
                        `${contact.owner1LastName}`
                    : 
                    'Contact Not Found'}
                </h1>
                {contact !== undefined? <ContactDetails contact={contact} /> : null }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        contact : state.homepage.contact
    };
};

export default connect(mapStateToProps, actions)(Contact);