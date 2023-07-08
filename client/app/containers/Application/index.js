import React from "react";

import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import actions from "../../actions";

//routes
import HomePage from "../HomePage";
// import Page404 from '../../components/Common/Page404';


class Application extends React.PureComponent {

    render() {
        return (
            <div className="application">
                {/* <Navigation /> */}
                <main className="main">
                    <Container>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/' component={HomePage} />

                                {/*
                                <Route exact path='/login' component={Login} />
                                <Route 
                                    path='/dashboard'
                                    component={Authentication(Dashboard)}
                                />
                                <Route path='/404' component={Page404} />
                                <Route path='*' component={Page404} /> 
                                */}
                            </Switch>
                        </div>
                    </Container>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(Application);