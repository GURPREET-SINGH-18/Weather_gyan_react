import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CurrentWeather from './components/CurrentWeather';
import MoreDetails from './components/MoreDetails';
import axios from 'axios';
import {useState, useEffect} from 'react';
import MyNav from './components/Navbar'
import DailyForcast from './components/DailyForcast';
import HourlyForecast from './components/HourlyForecast';

function App() {
    const [data,updatedata]= useState('Indore');
    const [loc,updateloc]= useState({
    "name": "Indore",
    "local_names": {
        "hi": "इन्दौर",
        "uk": "Індаур",
        "pa": "ਇੰਦੌਰ",
        "he": "אינדור",
        "ar": "إندور",
        "mr": "इंदूर",
        "ml": "ഇൻ‌ഡോർ",
        "ja": "インドール",
        "kn": "ಇಂದೋರ್",
        "en": "Indore",
        "ru": "Индаур",
        "zh": "印多尔",
        "gu": "ઈંદોર",
        "ms": "Indore"
    },
    "lat": 22.7203616,
    "lon": 75.8681996,
    "country": "IN",
    "state": "Madhya Pradesh"
    });
    const [we,updatewe]= useState({
    "lat": 22.7204,
    "lon": 75.8682,
    "timezone": "Asia/Kolkata",
    "timezone_offset": 19800,
    "current": {
        "dt": 1645966833,
        "sunrise": 1645924806,
        "sunset": 1645966733,
        "temp": 26.1,
        "feels_like": 26.1,
        "pressure": 1012,
        "humidity": 17,
        "dew_point": -0.73,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.91,
        "wind_deg": 273,
        "wind_gust": 3.33,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ]
    },
    "minutely": [
        {
            "dt": 1645966860,
            "precipitation": 0
        },
        {
            "dt": 1645966920,
            "precipitation": 0
        },
        {
            "dt": 1645966980,
            "precipitation": 0
        },
        {
            "dt": 1645967040,
            "precipitation": 0
        },
        {
            "dt": 1645967100,
            "precipitation": 0
        },
        {
            "dt": 1645967160,
            "precipitation": 0
        },
        {
            "dt": 1645967220,
            "precipitation": 0
        },
        {
            "dt": 1645967280,
            "precipitation": 0
        },
        {
            "dt": 1645967340,
            "precipitation": 0
        },
        {
            "dt": 1645967400,
            "precipitation": 0
        },
        {
            "dt": 1645967460,
            "precipitation": 0
        },
        {
            "dt": 1645967520,
            "precipitation": 0
        },
        {
            "dt": 1645967580,
            "precipitation": 0
        },
        {
            "dt": 1645967640,
            "precipitation": 0
        },
        {
            "dt": 1645967700,
            "precipitation": 0
        },
        {
            "dt": 1645967760,
            "precipitation": 0
        },
        {
            "dt": 1645967820,
            "precipitation": 0
        },
        {
            "dt": 1645967880,
            "precipitation": 0
        },
        {
            "dt": 1645967940,
            "precipitation": 0
        },
        {
            "dt": 1645968000,
            "precipitation": 0
        },
        {
            "dt": 1645968060,
            "precipitation": 0
        },
        {
            "dt": 1645968120,
            "precipitation": 0
        },
        {
            "dt": 1645968180,
            "precipitation": 0
        },
        {
            "dt": 1645968240,
            "precipitation": 0
        },
        {
            "dt": 1645968300,
            "precipitation": 0
        },
        {
            "dt": 1645968360,
            "precipitation": 0
        },
        {
            "dt": 1645968420,
            "precipitation": 0
        },
        {
            "dt": 1645968480,
            "precipitation": 0
        },
        {
            "dt": 1645968540,
            "precipitation": 0
        },
        {
            "dt": 1645968600,
            "precipitation": 0
        },
        {
            "dt": 1645968660,
            "precipitation": 0
        },
        {
            "dt": 1645968720,
            "precipitation": 0
        },
        {
            "dt": 1645968780,
            "precipitation": 0
        },
        {
            "dt": 1645968840,
            "precipitation": 0
        },
        {
            "dt": 1645968900,
            "precipitation": 0
        },
        {
            "dt": 1645968960,
            "precipitation": 0
        },
        {
            "dt": 1645969020,
            "precipitation": 0
        },
        {
            "dt": 1645969080,
            "precipitation": 0
        },
        {
            "dt": 1645969140,
            "precipitation": 0
        },
        {
            "dt": 1645969200,
            "precipitation": 0
        },
        {
            "dt": 1645969260,
            "precipitation": 0
        },
        {
            "dt": 1645969320,
            "precipitation": 0
        },
        {
            "dt": 1645969380,
            "precipitation": 0
        },
        {
            "dt": 1645969440,
            "precipitation": 0
        },
        {
            "dt": 1645969500,
            "precipitation": 0
        },
        {
            "dt": 1645969560,
            "precipitation": 0
        },
        {
            "dt": 1645969620,
            "precipitation": 0
        },
        {
            "dt": 1645969680,
            "precipitation": 0
        },
        {
            "dt": 1645969740,
            "precipitation": 0
        },
        {
            "dt": 1645969800,
            "precipitation": 0
        },
        {
            "dt": 1645969860,
            "precipitation": 0
        },
        {
            "dt": 1645969920,
            "precipitation": 0
        },
        {
            "dt": 1645969980,
            "precipitation": 0
        },
        {
            "dt": 1645970040,
            "precipitation": 0
        },
        {
            "dt": 1645970100,
            "precipitation": 0
        },
        {
            "dt": 1645970160,
            "precipitation": 0
        },
        {
            "dt": 1645970220,
            "precipitation": 0
        },
        {
            "dt": 1645970280,
            "precipitation": 0
        },
        {
            "dt": 1645970340,
            "precipitation": 0
        },
        {
            "dt": 1645970400,
            "precipitation": 0
        },
        {
            "dt": 1645970460,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1645966800,
            "temp": 26.1,
            "feels_like": 26.1,
            "pressure": 1012,
            "humidity": 17,
            "dew_point": -0.73,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.91,
            "wind_deg": 273,
            "wind_gust": 3.33,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645970400,
            "temp": 25.73,
            "feels_like": 24.83,
            "pressure": 1012,
            "humidity": 18,
            "dew_point": -0.31,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.83,
            "wind_deg": 287,
            "wind_gust": 3.01,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645974000,
            "temp": 24.94,
            "feels_like": 23.96,
            "pressure": 1013,
            "humidity": 18,
            "dew_point": -0.88,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.21,
            "wind_deg": 308,
            "wind_gust": 2.31,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645977600,
            "temp": 24,
            "feels_like": 22.95,
            "pressure": 1014,
            "humidity": 19,
            "dew_point": -0.9,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.8,
            "wind_deg": 315,
            "wind_gust": 1.94,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645981200,
            "temp": 22.75,
            "feels_like": 21.6,
            "pressure": 1014,
            "humidity": 20,
            "dew_point": -1.19,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.38,
            "wind_deg": 336,
            "wind_gust": 2.45,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645984800,
            "temp": 20.81,
            "feels_like": 19.49,
            "pressure": 1015,
            "humidity": 21,
            "dew_point": -1.96,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.98,
            "wind_deg": 357,
            "wind_gust": 3.24,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645988400,
            "temp": 20.08,
            "feels_like": 18.77,
            "pressure": 1014,
            "humidity": 24,
            "dew_point": -0.96,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3,
            "wind_deg": 18,
            "wind_gust": 3.77,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645992000,
            "temp": 19.53,
            "feels_like": 18.27,
            "pressure": 1014,
            "humidity": 28,
            "dew_point": 0.71,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.35,
            "wind_deg": 28,
            "wind_gust": 6.31,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645995600,
            "temp": 18.74,
            "feels_like": 17.51,
            "pressure": 1013,
            "humidity": 32,
            "dew_point": 1.7,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.38,
            "wind_deg": 33,
            "wind_gust": 7.17,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1645999200,
            "temp": 18.15,
            "feels_like": 16.91,
            "pressure": 1013,
            "humidity": 34,
            "dew_point": 2.23,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.55,
            "wind_deg": 46,
            "wind_gust": 8.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646002800,
            "temp": 17.54,
            "feels_like": 16.32,
            "pressure": 1013,
            "humidity": 37,
            "dew_point": 2.65,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.32,
            "wind_deg": 51,
            "wind_gust": 8.24,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646006400,
            "temp": 17.18,
            "feels_like": 15.97,
            "pressure": 1014,
            "humidity": 39,
            "dew_point": 3.09,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.34,
            "wind_deg": 47,
            "wind_gust": 6.76,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646010000,
            "temp": 16.68,
            "feels_like": 15.47,
            "pressure": 1015,
            "humidity": 41,
            "dew_point": 3.57,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.19,
            "wind_deg": 46,
            "wind_gust": 6.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646013600,
            "temp": 17.12,
            "feels_like": 15.98,
            "pressure": 1016,
            "humidity": 42,
            "dew_point": 4.34,
            "uvi": 0.3,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.84,
            "wind_deg": 56,
            "wind_gust": 6.88,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646017200,
            "temp": 20.54,
            "feels_like": 19.56,
            "pressure": 1016,
            "humidity": 35,
            "dew_point": 4.85,
            "uvi": 1.37,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.91,
            "wind_deg": 62,
            "wind_gust": 6.38,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646020800,
            "temp": 23.85,
            "feels_like": 23.05,
            "pressure": 1017,
            "humidity": 29,
            "dew_point": 5.07,
            "uvi": 3.38,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.63,
            "wind_deg": 64,
            "wind_gust": 6.18,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646024400,
            "temp": 26.36,
            "feels_like": 26.36,
            "pressure": 1016,
            "humidity": 25,
            "dew_point": 4.89,
            "uvi": 5.79,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.53,
            "wind_deg": 71,
            "wind_gust": 4.77,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646028000,
            "temp": 28.4,
            "feels_like": 27.05,
            "pressure": 1015,
            "humidity": 21,
            "dew_point": 4.21,
            "uvi": 7.73,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.91,
            "wind_deg": 74,
            "wind_gust": 3.25,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646031600,
            "temp": 29.65,
            "feels_like": 27.91,
            "pressure": 1014,
            "humidity": 18,
            "dew_point": 3.06,
            "uvi": 8.45,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.46,
            "wind_deg": 68,
            "wind_gust": 2.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646035200,
            "temp": 30.86,
            "feels_like": 28.87,
            "pressure": 1013,
            "humidity": 17,
            "dew_point": 2.88,
            "uvi": 7.64,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 0.97,
            "wind_deg": 359,
            "wind_gust": 4.07,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646038800,
            "temp": 31.15,
            "feels_like": 29.09,
            "pressure": 1012,
            "humidity": 16,
            "dew_point": 2.54,
            "uvi": 5.64,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.71,
            "wind_deg": 291,
            "wind_gust": 4.81,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646042400,
            "temp": 31.33,
            "feels_like": 29.22,
            "pressure": 1011,
            "humidity": 15,
            "dew_point": 2.22,
            "uvi": 3.21,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.64,
            "wind_deg": 293,
            "wind_gust": 4.57,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646046000,
            "temp": 31.15,
            "feels_like": 29.07,
            "pressure": 1011,
            "humidity": 15,
            "dew_point": 1.93,
            "uvi": 1.28,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 3.11,
            "wind_deg": 298,
            "wind_gust": 4.53,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646049600,
            "temp": 30.22,
            "feels_like": 28.33,
            "pressure": 1011,
            "humidity": 16,
            "dew_point": 2.28,
            "uvi": 0.26,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 3.29,
            "wind_deg": 307,
            "wind_gust": 4.13,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646053200,
            "temp": 26.37,
            "feels_like": 26.37,
            "pressure": 1012,
            "humidity": 21,
            "dew_point": 2.63,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.55,
            "wind_deg": 322,
            "wind_gust": 3.05,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646056800,
            "temp": 24.58,
            "feels_like": 23.69,
            "pressure": 1013,
            "humidity": 23,
            "dew_point": 2.49,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.67,
            "wind_deg": 319,
            "wind_gust": 1.96,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646060400,
            "temp": 23.61,
            "feels_like": 22.68,
            "pressure": 1014,
            "humidity": 25,
            "dew_point": 2.49,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.49,
            "wind_deg": 330,
            "wind_gust": 1.55,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646064000,
            "temp": 22.82,
            "feels_like": 21.84,
            "pressure": 1015,
            "humidity": 26,
            "dew_point": 2.69,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.11,
            "wind_deg": 15,
            "wind_gust": 2.24,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646067600,
            "temp": 22.02,
            "feels_like": 21.01,
            "pressure": 1015,
            "humidity": 28,
            "dew_point": 2.87,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.38,
            "wind_deg": 28,
            "wind_gust": 4.81,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646071200,
            "temp": 20.98,
            "feels_like": 19.92,
            "pressure": 1015,
            "humidity": 30,
            "dew_point": 3.04,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.64,
            "wind_deg": 29,
            "wind_gust": 8.98,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646074800,
            "temp": 20.13,
            "feels_like": 19.06,
            "pressure": 1015,
            "humidity": 33,
            "dew_point": 3.57,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.82,
            "wind_deg": 34,
            "wind_gust": 10.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646078400,
            "temp": 19.57,
            "feels_like": 18.52,
            "pressure": 1014,
            "humidity": 36,
            "dew_point": 4.04,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.06,
            "wind_deg": 38,
            "wind_gust": 10.83,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646082000,
            "temp": 18.94,
            "feels_like": 17.86,
            "pressure": 1014,
            "humidity": 37,
            "dew_point": 4.11,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.83,
            "wind_deg": 41,
            "wind_gust": 10.25,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646085600,
            "temp": 18.33,
            "feels_like": 17.21,
            "pressure": 1014,
            "humidity": 38,
            "dew_point": 3.81,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.73,
            "wind_deg": 44,
            "wind_gust": 9.52,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646089200,
            "temp": 17.87,
            "feels_like": 16.7,
            "pressure": 1014,
            "humidity": 38,
            "dew_point": 3.44,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.56,
            "wind_deg": 50,
            "wind_gust": 8.9,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646092800,
            "temp": 17.47,
            "feels_like": 16.24,
            "pressure": 1014,
            "humidity": 37,
            "dew_point": 2.8,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.36,
            "wind_deg": 53,
            "wind_gust": 8.28,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646096400,
            "temp": 17.19,
            "feels_like": 15.9,
            "pressure": 1015,
            "humidity": 36,
            "dew_point": 2.25,
            "uvi": 0,
            "clouds": 5,
            "visibility": 10000,
            "wind_speed": 3.29,
            "wind_deg": 53,
            "wind_gust": 7.28,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646100000,
            "temp": 17.84,
            "feels_like": 16.62,
            "pressure": 1016,
            "humidity": 36,
            "dew_point": 2.71,
            "uvi": 0.31,
            "clouds": 4,
            "visibility": 10000,
            "wind_speed": 3.15,
            "wind_deg": 62,
            "wind_gust": 7.34,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646103600,
            "temp": 21.5,
            "feels_like": 20.49,
            "pressure": 1017,
            "humidity": 30,
            "dew_point": 3.26,
            "uvi": 1.41,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 4.34,
            "wind_deg": 74,
            "wind_gust": 7.48,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646107200,
            "temp": 25.03,
            "feels_like": 24.22,
            "pressure": 1017,
            "humidity": 24,
            "dew_point": 3.2,
            "uvi": 3.47,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 4.89,
            "wind_deg": 76,
            "wind_gust": 6.69,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646110800,
            "temp": 27.54,
            "feels_like": 26.46,
            "pressure": 1017,
            "humidity": 21,
            "dew_point": 3.3,
            "uvi": 5.94,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 4.8,
            "wind_deg": 77,
            "wind_gust": 5.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646114400,
            "temp": 29.38,
            "feels_like": 27.72,
            "pressure": 1016,
            "humidity": 19,
            "dew_point": 3.21,
            "uvi": 7.92,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 4.1,
            "wind_deg": 74,
            "wind_gust": 3.39,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646118000,
            "temp": 30.37,
            "feels_like": 28.45,
            "pressure": 1014,
            "humidity": 16,
            "dew_point": 2.04,
            "uvi": 8.66,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 3.48,
            "wind_deg": 59,
            "wind_gust": 2.41,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646121600,
            "temp": 31.1,
            "feels_like": 29.02,
            "pressure": 1013,
            "humidity": 14,
            "dew_point": 0.97,
            "uvi": 7.83,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 3.14,
            "wind_deg": 39,
            "wind_gust": 2.56,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646125200,
            "temp": 31.51,
            "feels_like": 29.35,
            "pressure": 1012,
            "humidity": 13,
            "dew_point": 0.28,
            "uvi": 5.79,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.93,
            "wind_deg": 22,
            "wind_gust": 2.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646128800,
            "temp": 31.62,
            "feels_like": 29.44,
            "pressure": 1011,
            "humidity": 13,
            "dew_point": -0.23,
            "uvi": 3.33,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.93,
            "wind_deg": 13,
            "wind_gust": 2.27,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646132400,
            "temp": 31.22,
            "feels_like": 29.11,
            "pressure": 1011,
            "humidity": 13,
            "dew_point": -0.49,
            "uvi": 1.33,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 3.24,
            "wind_deg": 12,
            "wind_gust": 2.42,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1646136000,
            "temp": 30.3,
            "feels_like": 28.37,
            "pressure": 1011,
            "humidity": 14,
            "dew_point": 0.03,
            "uvi": 0.27,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 3.6,
            "wind_deg": 17,
            "wind_gust": 3.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
        {
            "dt": 1645943400,
            "sunrise": 1645924806,
            "sunset": 1645966733,
            "moonrise": 1645915080,
            "moonset": 1645954200,
            "moon_phase": 0.87,
            "temp": {
                "day": 28.93,
                "min": 18.48,
                "max": 30.56,
                "night": 20.81,
                "eve": 26.86,
                "morn": 18.82
            },
            "feels_like": {
                "day": 27.35,
                "night": 19.49,
                "eve": 25.89,
                "morn": 17.46
            },
            "pressure": 1016,
            "humidity": 17,
            "dew_point": 1.38,
            "wind_speed": 4.45,
            "wind_deg": 269,
            "wind_gust": 6.08,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 8.18
        },
        {
            "dt": 1646029800,
            "sunrise": 1646011156,
            "sunset": 1646053161,
            "moonrise": 1646004900,
            "moonset": 1646044620,
            "moon_phase": 0.91,
            "temp": {
                "day": 28.4,
                "min": 16.68,
                "max": 31.33,
                "night": 20.98,
                "eve": 30.22,
                "morn": 17.18
            },
            "feels_like": {
                "day": 27.05,
                "night": 19.92,
                "eve": 28.33,
                "morn": 15.97
            },
            "pressure": 1015,
            "humidity": 21,
            "dew_point": 4.21,
            "wind_speed": 4.63,
            "wind_deg": 64,
            "wind_gust": 8.98,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 8.45
        },
        {
            "dt": 1646116200,
            "sunrise": 1646097506,
            "sunset": 1646139588,
            "moonrise": 1646094300,
            "moonset": 1646134920,
            "moon_phase": 0.95,
            "temp": {
                "day": 29.38,
                "min": 17.19,
                "max": 31.62,
                "night": 21.69,
                "eve": 30.3,
                "morn": 17.47
            },
            "feels_like": {
                "day": 27.72,
                "night": 20.59,
                "eve": 28.37,
                "morn": 16.24
            },
            "pressure": 1016,
            "humidity": 19,
            "dew_point": 3.21,
            "wind_speed": 4.89,
            "wind_deg": 76,
            "wind_gust": 10.83,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 8.66
        },
        {
            "dt": 1646202600,
            "sunrise": 1646183855,
            "sunset": 1646226015,
            "moonrise": 1646183340,
            "moonset": 1646225040,
            "moon_phase": 0,
            "temp": {
                "day": 31.21,
                "min": 18.5,
                "max": 32.85,
                "night": 23.37,
                "eve": 31.55,
                "morn": 18.53
            },
            "feels_like": {
                "day": 29.1,
                "night": 22.28,
                "eve": 29.38,
                "morn": 17.2
            },
            "pressure": 1015,
            "humidity": 13,
            "dew_point": 0.11,
            "wind_speed": 4.54,
            "wind_deg": 89,
            "wind_gust": 8.14,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 9.23
        },
        {
            "dt": 1646289000,
            "sunrise": 1646270204,
            "sunset": 1646312441,
            "moonrise": 1646272140,
            "moonset": 1646315040,
            "moon_phase": 0.02,
            "temp": {
                "day": 31.3,
                "min": 20.47,
                "max": 33.65,
                "night": 24.07,
                "eve": 32.01,
                "morn": 20.47
            },
            "feels_like": {
                "day": 29.18,
                "night": 23,
                "eve": 29.77,
                "morn": 19.15
            },
            "pressure": 1014,
            "humidity": 12,
            "dew_point": -1.02,
            "wind_speed": 3.39,
            "wind_deg": 205,
            "wind_gust": 4.79,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 22,
            "pop": 0,
            "uvi": 8.47
        },
        {
            "dt": 1646375400,
            "sunrise": 1646356552,
            "sunset": 1646398867,
            "moonrise": 1646360700,
            "moonset": 1646404800,
            "moon_phase": 0.05,
            "temp": {
                "day": 31.14,
                "min": 19.52,
                "max": 33.57,
                "night": 22.83,
                "eve": 32.18,
                "morn": 19.52
            },
            "feels_like": {
                "day": 29.05,
                "night": 21.72,
                "eve": 29.91,
                "morn": 18.13
            },
            "pressure": 1014,
            "humidity": 13,
            "dew_point": -0.59,
            "wind_speed": 4.19,
            "wind_deg": 18,
            "wind_gust": 7.27,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 50,
            "pop": 0,
            "uvi": 9
        },
        {
            "dt": 1646461800,
            "sunrise": 1646442899,
            "sunset": 1646485292,
            "moonrise": 1646449140,
            "moonset": 1646494500,
            "moon_phase": 0.09,
            "temp": {
                "day": 30.67,
                "min": 18.96,
                "max": 33.25,
                "night": 21.77,
                "eve": 31.96,
                "morn": 18.96
            },
            "feels_like": {
                "day": 28.69,
                "night": 20.55,
                "eve": 29.72,
                "morn": 17.77
            },
            "pressure": 1014,
            "humidity": 16,
            "dew_point": 1.86,
            "wind_speed": 5.09,
            "wind_deg": 53,
            "wind_gust": 10.65,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 9
        },
        {
            "dt": 1646548200,
            "sunrise": 1646529246,
            "sunset": 1646571717,
            "moonrise": 1646537580,
            "moonset": 1646584140,
            "moon_phase": 0.12,
            "temp": {
                "day": 30.87,
                "min": 18.98,
                "max": 33.57,
                "night": 23.78,
                "eve": 32.63,
                "morn": 18.98
            },
            "feels_like": {
                "day": 28.83,
                "night": 22.61,
                "eve": 30.29,
                "morn": 17.56
            },
            "pressure": 1013,
            "humidity": 11,
            "dew_point": -3.11,
            "wind_speed": 3.5,
            "wind_deg": 316,
            "wind_gust": 7.7,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 7,
            "pop": 0,
            "uvi": 9
        }
    ]
    });
    useEffect(() =>{location(data)},[]);
    async function location(c) {
        let d= await axios.get('http://api.openweathermap.org/geo/1.0/direct?q='+c+'&limit=1&appid=f96e2015395c03e4d7e70c0d6d6a98fc');
        console.log(d.data.lenght)
        updateloc(d.data[0]);
        let w= await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+d.data[0].lat+'&lon='+d.data[0].lon+'&appid=f96e2015395c03e4d7e70c0d6d6a98fc&units=metric');
        updatewe(w.data);
    }
    const display=(event)=>{
        updatedata(event.target.value);
    };
    const submit=(e)=>{
        e.preventDefault();
        console.log(data);
        location(data);
    };
    return(
    <>
        <MyNav/>
        <div className="container">
        <div className='mt-3 d-flex flex-row justify-content-center'>
            <div style={{"width":"25.5rem"}}>
                <form onSubmit={submit} className="d-flex flex-row">
                    <input type="text" className="form-control" placeholder="Search for location" name="city" onChange={display} value={data}/>
                    <button type="submit" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
                    </button>
                </form>
            </div>
        </div>
        <div className='mt-5 d-flex flex-row justify-content-between'>
            <CurrentWeather wdata={we} ldata={loc}/>
            <MoreDetails wdata={we} ldata={loc}/>
        </div>
        <div className="mt-4">
            <DailyForcast wdata={we} ldata={loc}/>
        </div>
        <div className="mt-4">
            <HourlyForecast wdata={we} ldata={loc}/>
        </div>
        </div>
    </>
    );
}

export default App;
