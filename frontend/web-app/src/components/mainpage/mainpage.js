import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Mainpage() {
  return (
    <div className="mainPage">
      <h1>Welcome! , Choose a destination.</h1>
      <img src="https://i.pinimg.com/236x/41/3f/97/413f97ee1f8b137a5454b3c775f5b8cb.jpg"></img>
    </div>
  );
}
//react router
export default Mainpage;
