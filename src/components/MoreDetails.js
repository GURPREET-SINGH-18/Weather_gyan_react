import React from 'react'
import {Card} from 'react-bootstrap';

export default function MoreDetails(props) {
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
                    <Card.Title style={{ marginBottom:'0rem',fontSize:'1.35rem'}}>More Details</Card.Title>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                WIND
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.wind_speed} m/s
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                HUMIDITY
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.humidity}%
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                VISIBILITY
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {(props.wdata.current.visibility)/1000} km
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                PRESSURE
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.pressure} hPa
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                DEW POINT
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.dew_point}°
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                SUNRISE
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {datecon(props.wdata.timezone_offset,props.wdata.current.sunrise*1000)}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                SUNSET
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                            {datecon(props.wdata.timezone_offset,props.wdata.current.sunset*1000)}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                UV INDEX
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.uvi}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                CLOUDS
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.clouds}%
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '14px',color: '#706a6a'}}>
                                WIND DEGREE
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '18px',fontWeight: 600}}>
                                {props.wdata.current.wind_deg}°
                            </p>
                        </div>
                    </div>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        );
}
