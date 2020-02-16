import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
         <li>
                <Link to="/">Home Page</Link>
         </li>
         <li>
                <Link to="/page1">page1</Link>
         </li>
          <li>
                <Link to="/page2">page2</Link>
         </li>
         <li>
                <Link to="/page3">page3</Link>
         </li>
      </ul>
    </div>
  );
}
//react router
export default Navbar;
