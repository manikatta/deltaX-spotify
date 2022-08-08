import React from 'react'
import './topartists.css'

export default function Topartists() {
  return (
    <div className='topartists'>
        <h1>Top 10 Artists</h1>
        <div className="artists-table">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Artists</th>
      <th scope="col">Date released</th>
      <th scope="col">songs</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Arjith singh</th>
      <td>2022</td>
      <td>Kesariya,Fitoor,Kitni Haseen hogi,Seher</td>
    </tr>
    <tr>
      <th scope="row">Jubin Nautiyal</th>
      <td>2019,2020,2021,2022</td>
      <td>Lut gaye, Raatan lambiyan,Dil galti kar baitha hai</td>
      
    </tr>
    <tr>
      <th scope="row">Mohit Chauhan</th>
      <td >2022</td>
      <td>Teri Ada,Raah dikha de,Rootha hoon</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
