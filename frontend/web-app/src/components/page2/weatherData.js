import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './weatherData.css'
function WeatherData(props) {
    if(props.error===true)
    return(
        <div>
            <img src="https://i1.sndcdn.com/artworks-000606461494-jcvqjg-t300x300.jpg" alt="error not found"></img>
        </div>
    );
    if(props.found===false){
        return(
            <div></div>
        );
    }
   else{
       console.log("test",props.data)
       const time1=props.data.sys.sunset*1000;
       const time2=props.data.sys.sunrise*1000;
       const temp1= new Date(time1);
       const temp2= new Date(time2);
       console.log("time",temp1);
       console.log("time", temp2);
       console.log('http://openweathermap.org/img/wn/'+props.data.weather[0].icon+'@2x.png')
       return <div>
                <div className="WeatherDataBox">
                    <div className="WeatherDataInfo">
                        <h1 style={{color:"white"}}> {props.data.name} ,{props.data.sys.country}</h1>
                        <img style={{width:"100px",height:"100px"}} src={'http://openweathermap.org/img/wn/'+props.data.weather[0].icon+'@2x.png'}></img>
                        
                    </div>
                </div>
                <div>   
                <div className="space">
                        <h4 style={{color:"white"}}>Weather: {props.data.weather[0].main}</h4>
                        <h4 style={{color:"white"}}>Temperature:{props.data.main.temp } °C</h4>
                        </div>
                      <hr></hr>
                      <div className="space">
                            <h4 style={{color:"white"}}>Sunset: {temp1.toLocaleTimeString()}</h4>
                            <h4 style={{color:"white"}}>Sunrise: {temp2.toLocaleTimeString()}</h4>
                      </div>
                      <hr></hr>
                      <div className="space">
                            <h4 style={{color:"white"}}>Humidity: {props.data.main.humidity}%</h4>
                            <h4 style={{color:"white"}}>Pressure: {props.data.main.pressure} hpa</h4>
                            </div>
                            <hr></hr>
                            <div className="space">
                            <h4 style={{color:"white"}}>Wind: {props.data.wind.speed} m/s,({props.data.wind.deg}°)</h4>
                            <h4 style={{color:"white"}}>Feels like: {props.data.main.feels_like}°C</h4>
                            </div>
                </div>
              </div>
   }
//react router
   }
export default WeatherData;
