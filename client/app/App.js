import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import Application from "./containers/Application";

const App = () => {
    return(
       <Provider store={store}>
        <ConnectedRouter history={history}>
            <Application />
        </ConnectedRouter>
       </Provider>
    );
  }
  
  export default App;