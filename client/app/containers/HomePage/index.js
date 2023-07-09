/*
* Homepage
*/

import React, { useState } from "react";

import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Upload from '../../components/Common/Upload';

class Homepage extends React.PureComponent {
    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        const {
            uploadContact,
            contactData,
            contacts
        } = this.props;
        return (
            <div className="homepage">
               <h1>Home</h1>
               <Upload 
                uploadContact={uploadContact}
                contactData={contactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contactData: state.homepage.contactData,
        contacts : state.homepage.contacts
    };
};

export default connect(mapStateToProps, actions)(Homepage);