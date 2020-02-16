import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MusicList from './musicList'

function Page1() {

    const [search, setSearch] = useState("");// Search bar value
    const [results,setResults] = useState([]);
    const [error, setError] = useState(false);

    const handleKeyPress=(e)=>{
        if(e.charCode==13){
            e.preventDefault();
            console.log("enter pressed")
            console.log(search)
            const string = search.replace(" ","+");
            console.log(string);

            axios.get('https://itunes.apple.com/search?term='+string+'&limit=5&entity=song')
            .then(res => {
            //   const persons = res.data;
            //   this.setState({ persons });
            console.log(res.data) //res.data.resultCount for number , res.data.results for []
            if(res.data.resultCount===0) // error
            {
              setError(true);
            }
            else{
              setError(false);
            }
            setResults(res.data.results);
            })
            .catch(err=>console.log(err));
            
        } 
      }

    const handleInput = event => {//saves Search bar value for later use
        setSearch(event.target.value);
        console.log(search)
      };
  return (
    <div className="Page1">
        <h1 style={{color:"white"}}>Enter desired search for itunes:</h1>
           <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Search here" onChange={e => handleInput(e)} onKeyPress={e=>{handleKeyPress(e)}}/>
          </Col>
          <Col>
            {/* <Button variant="dark" type="button" onClick={e => handleMousePress(e)}>
              Submit
            </Button> */}
          </Col>
        </Row>
      </Form>
      <div>
          <MusicList error={error} songs={results}></MusicList>
      </div>
    </div>
  );
}
//react router
export default Page1;
