import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import Application from "./containers/Application";

// Import application sass styles
import './styles/style.scss';

// Import Font Awesome Icon set
import 'font-awesome/css/font-awesome.min.css';

// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// react-bootstrap-table2 styles
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// rc-slider style
import 'rc-slider/assets/index.css';

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