import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ModalImage from "react-modal-image";
import './imageItem.css'
function ImageItem(props) {
  return (
    <div className="ImageItem">
      {/* <img style={{width:"19vw",height:"25vh",marginLeft:"0.25vw"}} src={props.data.largeImageURL}></img> */}
      <ModalImage
      className="ImageItemImage"
        small={props.data.largeImageURL}
        large={props.data.largeImageURL}
            />    
    </div>
  );
}
//react router
export default ImageItem;
