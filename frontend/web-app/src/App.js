import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2'
import Page3 from './components/page3/page3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar'
import Mainpage from './components/mainpage/mainpage'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <div>
          <Route exact path="/" component={Mainpage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3}/>
        </div>
        <hr></hr>
        <h3 style={{color:"grey"}}>Web final project by shani</h3>
      </Router>
    </div>
  );
}
//react router
export default App;
