import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Card} from 'react-bootstrap';

export default function DailyForcast(props) {
  let datecon = (tos,ctoc)=> {
    let d = new Date()
    var a = ctoc + (d.getTimezoneOffset() * 60000) + (1000 * tos)
    let nd = new Date(a)
    return (nd)
  }
  let moonphase = (n)=> {
    if(n===0.25){
      return ("New Moon")
    }
    else if(n===0.5){
      return ("First quarter moon")
    }
    else if(n===0.75){
      return ("Last quarter moon")
    }
    else if(n>=0.0 && n<0.25){
      return ("Waxing Crescent")
    }
    else if(n>0.25 && n<0.5){
      return ("Waxing Gibous")
    }
    else if(n>0.5 && n<0.75){
      return ("Waning Gibous")
    }
    else if(n>0.75 && n<=1){
      return ("Waning Crescent")
    }
    else{
      return(n)
    }
  }
  return (
    <>
    <div>
      <h4>7-Days Daily Forecast</h4>
    </div>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      centerMode={false}
      className="mt-3 mb-4"
      containerClass="container"
      dotListClass=""
      draggable
      shouldResetAutoplay={false}
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
    {props.wdata.daily.map((d,i)=>(
      <div key={i}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{datecon(props.wdata.timezone_offset,d.dt*1000).toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</Card.Title>
          <Card.Text>
          <div className="d-flex flex-row">
            <div className="d-flex flex-row">
              <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} alt="" style={{height:'38px'}} />
              <h1 style={{fontSize:'30px'}}>{d.temp.day}</h1><h1 style={{ fontSize:'20px',marginTop:'3px' }}>°C</h1>
            </div>
            <div style={{paddingLeft:'20px'}}>
              <strong><p style={{ marginTop:'5px',fontSize:'20px',marginBottom:'0rem'}}>{d.weather[0].main}</p></strong>
            </div>
          </div>
          <div className="mt-1">
          <h6 style={{marginBottom: '0.1rem'}}>Their will be {d.weather[0].description}.</h6>  
          <p style={{marginBottom: '0.1rem'}}>The high will be {d.temp.max}°C, the low will be {d.temp.min}°C.</p>  
          </div>
          <hr />
          <div className="">
            <h6>Temperature</h6>
            <hr style={{margin: '0.2rem', marginBottom:'0.5rem'}}/>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Morning</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.temp.morn}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Afternoon</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.temp.day}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Evening</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.temp.eve}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Night</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.temp.night}°C</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h6>Feels like</h6>
            <hr style={{margin: '0.2rem', marginBottom:'0.5rem'}}/>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Morning</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.feels_like.morn}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Afternoon</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.feels_like.day}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Evening</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.feels_like.eve}°C</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Night</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{d.feels_like.night}°C</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-3">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Sunrise</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{datecon(props.wdata.timezone_offset,d.sunrise*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Sunset</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{datecon(props.wdata.timezone_offset,d.sunset*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Moonrise</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{datecon(props.wdata.timezone_offset,d.moonrise*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Moonset</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{datecon(props.wdata.timezone_offset,d.moonset*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}</p>
              </div>
              <div>
                <p style={{marginBottom: '0.1rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>Moon Phase</p>
                <p style={{marginBottom: '0.1rem',fontSize: '14px',fontWeight: 600}}>{moonphase(d.moon_phase)}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-row justify-content-between mt-3">
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                WIND
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.wind_speed} m/s
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                HUMIDITY
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.humidity}%
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                PRECIPITATION
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                            {d.pop}%
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                PRESSURE
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.pressure} hPa
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                WIND GUST
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.wind_gust}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                DEW POINT
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                            {d.dew_point}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                UV INDEX
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.uvi}
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                CLOUDS
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.clouds}%
                            </p>
                        </div>
                        <div>
                            <p style={{marginBottom: '0rem',fontWeight: 600,fontSize: '12px',color: '#706a6a'}}>
                                WIND DEGREE
                            </p>
                            <p style={{marginBottom: '0rem',fontSize: '14px',fontWeight: 600}}>
                                {d.wind_deg}°
                            </p>
                        </div>
                    </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      ))}
    </Carousel>
    </>
  )
}
