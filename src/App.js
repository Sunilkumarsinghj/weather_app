import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './image.css'
import {link,loading} from './Link.jsx'
import { faCloudRain, faFlag, faRainbow } from '@fortawesome/free-solid-svg-icons';

function App() {
  let[city,setCity]=useState('');
  let[weatherDetails,setWeatherDetails]=useState();
  let[load,setLoad]=useState(false)

  let getFormData=(event)=>{
          setLoad(true)
          setWeatherDetails(undefined)
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
        .then((first)=>first.json())
        .then((final)=>{
          if(final.cod==='404'){
           setWeatherDetails(undefined)
          }
          else{
            console.log(final)
            setWeatherDetails(final);
          }
        
           setLoad(false)
        })
        
        
   event.preventDefault();
  }
  return (
    <div className=' w-[100%] h-[100vh] bg-[#4aacb1] px-[200px]'>
     < div className='max-w-[1320px] max-auto'>
     <h1 className='text-[40px] font-bold py-[50px] text-white'>simple weather application</h1>
    
     <form onSubmit={(event)=>getFormData(event)}>  
    <input type='text' value={city} onChange={(evnt)=>setCity(evnt.target.value)}className='w-[300px] h-[40px] pl-3' placeholder='type city name '/><button className='shadow-lg bg-[green] w-[100px] h-[40px] pl-3'>search</button>
    </form>   

     <div className='w-[400px] max-auto bg-white shadow-lg mt-[40px] p-[25px] '>       
      <img src={loading} className={`${(load)?``:`hidden`}`}/>
      {(weatherDetails!==undefined)
      ?
    <>
    <img src={link} className='react'/> <h3 className='font-bold text-[30px]'>{weatherDetails.name} <span className='bg-[yellow]'>{weatherDetails.sys.country}  </span></h3>
      <h2 className='font-bold text-[40px]'>{weatherDetails.main.temp}°c</h2>
      <img src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}/>
    
      <p>{weatherDetails.weather[0].description}</p>
      <div className='parent'><div className='child1'>humidity {weatherDetails.main.humidity}<br/>pressure {weatherDetails.main.pressure}</div>
      <div className='child2'>wind speed {weatherDetails.wind.speed}km/h<br/>feels like {weatherDetails.main.feels_like}°c</div></div>
    </> 
    :
    `${(load)?'':'no data matched..'}`
    }
    </div>
    </div>
    </div>
  );
}

export default App;
