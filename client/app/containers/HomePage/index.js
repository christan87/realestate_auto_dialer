/*
* Homepage
*/

import React, { useState } from "react";

import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Upload from '../../components/Common/Upload';

class Homepage extends React.PureComponent {
    render() {
        const {
            uploadContact,
            contactData
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
        contactData: state.homepage.contactData
    };
};

export default connect(mapStateToProps, actions)(Homepage);