import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import Reactdatalist from './components2/React_datalist.js';
import Reactcard from './components2/React_card.js';
import Tabs from './components2/Tabs.js';
import Showlogin from './components2/ShowLogin.js'
require('./styles2.css');

function ShowComponents() {
  return (
    <div className="App" class=".pf-m-redhat-font" bgcolor="black">
      <center>
            <center>
              <br/>
              <font size="12"><b>Welcome Patternfly Library Admins</b></font>
              <div style={{width:80+'%'}} align="left" background-color="FF0000">
              </div>
            </center>
      <Tabs>
        <div label="Books Catalog">
            <center>
              <br/>
              <font size="6"><b>Checked Out Books:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactcard/>
              </div>
            </center>
        </div>
        <div label="Check out History">
            <center>
              <br/>
              <font size="6"><b>Checkout History:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactdatalist/>
              </div>
            </center>
        </div>
        <div label="User Login">
            <center>
              <div style={{width:80+'%'}} align="center">
                <br/>
                <b>Not an Admin. Login with your </b>
                <a href="http://localhost:3000/login">user account</a>
              </div>
            </center>
        </div>
      </Tabs>
      </center>
    </div>
  );
}

export default ShowComponents;
