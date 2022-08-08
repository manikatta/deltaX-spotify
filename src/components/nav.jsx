import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>




export default function nav() {
  return (
    
     <nav>
        <span id='home'>Home</span>
        <input type="search" required='Search' id='inp' placeholder='Search' />
     </nav>
    
  )
}

