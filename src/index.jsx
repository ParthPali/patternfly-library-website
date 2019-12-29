import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import Reactdatalist from './components/React_datalist.js';
import Reactcard from './components/React_card.js';
import Reactmodal from './components/React_modal.js';
import Reactdatalist2 from './components/React_datalist2.js';
import Tabs from './components/Tabs.js';
require('./styles.css');

function ShowComponents() {
  return (
    <div className="App" class=".pf-m-redhat-font" bgcolor="black">
      <center>
            <center>
              <br/>
              <font size="12"><b>Welcome Patternfly Library Users</b></font>
              <div style={{width:80+'%'}} align="left" background-color="FF0000">
              </div>
            </center>
      <Tabs>
        <div label="Books Issued">
            <center>
              <br/>
              <font size="6"><b>Checked Out Books:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactcard/>
              </div>
            </center>
        </div>
        <div label="Books Available">
            <center>
              <br/>
              <font size="6"><b>Available for checkout:</b></font>
              <div style={{width:80+'%'}} align="left">
                <Reactdatalist/>
              </div>
            </center>
        </div>
        <div label="Most Issued Book">
            <center>
              <br/>
              <font size="6"><b>Your most issued books:</b></font>
              <div style={{width:80+'%'}} align="center">
                <Reactmodal/>
              </div>
            </center>
        </div>
        <div label="Top Trending Book">
            <center>
              <br/>
              <font size="6"><b>Top Trending Book in this library:</b></font>
              <div style={{width:80+'%'}} align="center">
                <Reactdatalist2 />
              </div>
            </center>
        </div>
        <div label="Admin Login">
            <center>
              <div style={{width:80+'%'}} align="center">
                <br/>
                <b>Not a User. Login with your </b>
                <a href="http://localhost:3000/adminlogin">admin account</a>
              </div>
            </center>
        </div>
      </Tabs>
      </center>
    </div>
  );
}

export default ShowComponents;
