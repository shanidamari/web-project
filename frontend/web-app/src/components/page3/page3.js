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
import Container from 'react-bootstrap/Container'
import ImageList from './imageList'

function Page3() {

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

            axios.get('https://pixabay.com/api/?key='+'15155343-ed137ac5ecda5d8ec0e305584'+'&q='+search)
            .then(res => {
            //   const persons = res.data;
            //   this.setState({ persons });
            console.log(res.data) //res.data.resultCount for number , res.data.results for []
            setResults(res.data.hits);
            setFound(true);
            setError(false);
            if(res.data.totalHits===0)
            {
                setError(true);
            }
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
    <div className="Page3">
        <h1 style={{color:"white"}}>Search Images:</h1>
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
         <ImageList images={results} error={error} found={found}></ImageList>
      </div>
    </div>
  );
}
//react router
export default Page3;
