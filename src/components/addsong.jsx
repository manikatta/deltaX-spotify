import React from 'react'
import './addsong.css'
import Addartists from './addartists';
import { useState, useEffect } from 'react';

export default function Addsong(props) {
const[buttonPopup,setButtonPopup]= useState(false);
const[timedPopup,setTimedPopup]= useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setTimedPopup(true);
  },3000);
},[]);

  return  (props.trigger) ? (
    <div className='popup'>
         <form action="" id='form'>
            <header className='head'>
            Song:             <input type="text" placeholder='song name' /><br /><br />
                    Date released: <input type="date" placeholder='date' /><br /><br />
                    Artwork: <input type="image" src='https://cdn-icons-png.flaticon.com/128/2659/2659360.png' alt='submit'   height={'35px'} /><br /><br />
                    Artists:   
                       <select name="" id="">
                       <option value="">Select artists</option>
                        <option value="">Pritham</option>
                        <option value="">Jubin Nautiyal</option>
                        <option value="">Mohit Chauhan</option>
                        <option value="">neha kakkar</option>
                        <option value="">sonu nigam</option>
                        <option value="">shreya ghoshal</option>
                       </select>
                    
                    
                    
                    
                     <br /><br />
            </header>
       
                    <div className="but">
                    <button  onClick={()=>setButtonPopup(true)} >+Add artists</button>
                    <button onClick={()=>props.setTrigger(false)}  >cancel</button>
                    <button>save</button>
                    </div>
                    
         </form>
                {props.children}

                <Addartists  trigger={buttonPopup}  setTrigger={setButtonPopup} ></Addartists>
                <Addartists  trigger={timedPopup} setTrigger={setTimedPopup}  ></Addartists>
    </div>
  ) : "";
  
}

