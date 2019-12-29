import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ShowComponents from './index.jsx';
import ShowComponents2 from './admin.jsx';
import ShowLogin from './login.jsx';
import Showadminlogin from './adminLogin.jsx'
function App() {
  return (
    <Router>
      <Route exact path="/" component={ ShowLogin }/>
      <Route exact path="/login" component={ ShowLogin }/>
      <Route exact path="/index" component={ ShowComponents }/>
      <Route exact path="/admin" component={ ShowComponents2 }/>
      <Route exact path="/adminlogin" component={ Showadminlogin }/>
    </Router>
  );
}

export default App;
