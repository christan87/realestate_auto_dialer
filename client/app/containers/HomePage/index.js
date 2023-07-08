/*
* Homepage
*/

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

class Homepage extends React.PureComponent {
    render() {
        return (
            <div className="homepage">
               <h1>Home</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(Homepage);