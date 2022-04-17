import React from 'react';
import {Card} from 'react-bootstrap';

function CurrentWeather(props) {
    let datecon = (tos,ctoc)=> {
    let d = new Date()
    var a = ctoc + (d.getTimezoneOffset() * 60000) + (1000 * tos)
    let nd = new Date(a)
    return (nd.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true}))
    }
    return (
        <div>
            <Card style={{ width: '40rem' }}>
            <Card.Body>
                <h1>{props.ldata.name}, {props.ldata.state}</h1>
                <Card.Title style={{ marginBottom:'0rem',fontSize:'0.75rem'}}>CURRENT WEATHER</Card.Title>
                <p style={{ fontSize:'12px',marginBottom:'0rem'}}>{datecon(props.wdata.timezone_offset,props.wdata.current.dt*1000)}</p>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-row">
                        <img src={`http://openweathermap.org/img/wn/${props.wdata.current.weather[0].icon}@2x.png`} alt="" />
                        <h1 style={{fontSize:'74px'}}>{props.wdata.current.temp}</h1><h1 style={{ fontSize:'50px',marginTop:'9px' }}>°C</h1>
                    </div>
                    <div style={{paddingLeft:'20px'}}>
                        <strong><p style={{ marginTop:'17px',fontSize:'20px',marginBottom:'0rem'}}>{props.wdata.current.weather[0].main}</p></strong>
                        <p style={{fontSize:'14px'}}>FEEL LIKE {props.wdata.current.feels_like}°C</p>
                    </div>
                </div>
                <div>
                    <h6>Their will be {props.wdata.current.weather[0].description}.</h6>                   
                    <h6>The high will be {props.wdata.daily[0].temp.max}°C, the low will be {props.wdata.daily[0].temp.min}°C</h6>                   
                </div>
                <Card.Text>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default CurrentWeather;