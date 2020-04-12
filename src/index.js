import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from './componets/Tab';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';



ReactDOM.render(
  <React.StrictMode>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/img/location.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Covid19 Stats
    </Navbar.Brand>
    </Navbar>
    <Info/><br></br>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
