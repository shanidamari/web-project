import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import ImageItem from './imageItem'
import './imageList.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function imageList(props) {

    if(props.error===true){
      return <div>
        <h1 style={{color:"Red"}}>Error, no images found</h1>
      </div>
    }
    if(props.images.length>0)
    {
        const content = props.images.map(id => {
      return (
            <ImageItem key={id.id} data={id}></ImageItem>
  
      );
    });
    return <Container>

                <div className="ImageList">
                    {content}
                </div>

        </Container>
    }
    else
     return <div></div>
}
//react router
export default imageList;
