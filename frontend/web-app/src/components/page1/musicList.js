import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MusicListItem from './musicListItem'

function MusicList(props) {

    if(props.error===true){
      return <div>
        <h1 style={{color:"Red"}}>Error, no songs found</h1>
      </div>
    }
    if(props.songs.length>0)
    {
        const content = props.songs.map(id => {
      return (
            <MusicListItem key={id.trackId} data={id}></MusicListItem>
  
      );
    });
    return content
    }
    else
     return <div></div>
}
//react router
export default MusicList;
