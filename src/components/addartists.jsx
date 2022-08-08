import React from 'react'
import './addartists.css'

export default function Addartists(props) {
    return (props.trigger) ?(
        <div className='addartists'>
            <h4 id='h4'>Add Artists</h4>
            <button id='close' onClick={()=> props.setTrigger(false)}>Xclose</button>
            <hr />
            <header className='artist-header'>
                <label htmlFor="">Artists name:</label> <input type="text" /><br /><br />
                <label htmlFor="">D.O.B:</label> <input type="date" /><br /><br />
                <label htmlFor="">Bio:</label> <input type="text" id='bio' />

            </header>

            {props.children}


        </div>
    ) : "";
}
