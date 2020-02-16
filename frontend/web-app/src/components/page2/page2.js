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
import WeatherData from './weatherData'

function Page2() {

    const [search, setSearch] = useState("");// Search bar value
    const [found, setFound] = useState(false);// Search bar value
    const [error, setError] = useState(false);
    const [results,setResults] = useState([]);

    const handleKeyPress=(e)=>{
        if(e.charCode==13){
            e.preventDefault();
            console.log("enter pressed")
            console.log(search)
            const string = search.replace(" ","+");
            console.log(string);

            axios.get('https://api.openweathermap.org/data/2.5/weather?q='+string+'&APPID=ee37614a227594930a06b3b82ee3581e&units=metric')
            .then(res => {
            //   const persons = res.data;
            //   this.setState({ persons });
            console.log(res.data) //res.data.resultCount for number , res.data.results for []
            setResults(res.data);
            setFound(true);
            setError(false);
            })
            .catch(err=>{
                console.log(err)
                setError(true);
                setFound(false);
            });
            
        } 
      }

    const handleInput = event => {//saves Search bar value for later use
        setSearch(event.target.value);
        console.log(search)
      };
  return (
    <div className="Page2">
        <h1 style={{color:"white"}}>Enter Country name of which you want the current weather:</h1>
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
          <WeatherData data={results} error={error} found={found}></WeatherData>
      </div>
    </div>
  );
}
//react router
export default Page2;
