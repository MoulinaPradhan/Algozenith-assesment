import React from 'react'
import "./Banner.css"
import Img from './bg.png';

export const Banner = () => {
  return (
    <div className="sub-container">
    <div className="context">
<h1>Be better at DSA & CP</h1>
<p>Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
<div className='button-container'>
    <button className='btn join-btn'>Join now &rarr; </button>
    <button className='btn view'>View curriculum</button>
</div>
<div className='checkbox-container'>
  <div className='left-side'>
  <input type="checkbox" id="check1"/>
    <label for ="check1">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check2" style={{marginLeft:10}}/>
    <label for ="check2">Lorem ipsum dolor sit amet</label>
  </div>
   <div className='right-side'>
    <input type="checkbox" id="check3"/>
    <label for ="check3">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check4" style={{marginLeft:10}}/>
    <label for ="check4">Lorem ipsum dolor sit amet</label>
</div>
</div>
</div>
    <img className='logo-container'
 src={Img}
    >

    </img>
    </div>
  )
}
