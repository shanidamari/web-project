import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './musicListItem.css'

function MusicListItem(props) {

    const time= new Date(props.data.releaseDate);
    console.log(props.data)
  return (
    <div className="MusicListItem" onClick={e =>{  window.open(props.data.trackViewUrl);}}>
      <img src={props.data.artworkUrl100}></img>
      <div className="MusicListItemData">
        <h1 style={{color:"white"}}>SONG:{props.data.trackName}</h1>
        <h4 style={{color:"white"}}>Type:{props.data.primaryGenreName}
        , Track price: {props.data.collectionPrice}$</h4>
        <h4 style={{color:"white"}}>Release date: {time.toLocaleDateString()}</h4>
      </div>
    </div>
  );
}
//react router
export default MusicListItem;
