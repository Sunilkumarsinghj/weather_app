import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[city,setCity]=useState('');
  let getFormData=(event)=>{
         let finalResponsr=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`)
        .then((first)=>first.json())
        .then((final)=>{console.log(final)
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
    
    
     <div className='w-[400px] max-auto bg-white shadow-lg mt-[40px] p-[25px]'> 
      
      <h3 className='font-bold text-[30px]'>Jaipur  <span className='bg-[yellow]'>IN</span></h3>
      <h2 className='font-bold text-[40px]'>9.62oc</h2>
      <img src='http://openweathermap.org/img/w/50d.png'/>
      <p>fog</p>
    </div>
    </div>
    </div>
  );
}

export default App;
