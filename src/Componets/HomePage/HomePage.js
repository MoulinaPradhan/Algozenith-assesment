import React from 'react'
import Sidebanner from '../Sidebanner/Sidebanner'
import "./HomePage.css"
export const HomePage = () => {
  return (
    <div className='homapage-container'>
<div className='main'>
    <h1>Invest in skills,
    <span style={{color:"#21598e"}}> earn 10X</span> of what you paid.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className='sub-checkbox'>
        <div className='left'><input type="checkbox" id="check1"/>
    <label for ="check1">1.2 Cr/Year</label>
    <label className='sub-label'>
highest fresher package
</label>
   
    <input type="checkbox" id="check3"/>

    <label for ="check3">Multiple &gt;100 Ranks</label>
    <label className='sub-label'>
in kickstart last year</label>
</div>
  <div className='right'> 
<input type="checkbox" id="check2"/>
    <label for ="check2">1000+ Offers</label>
    <label className='sub-label'>from top companies</label>
    <input type="checkbox" id="check4"/>
    <label for ="check4">Trusted by IITians
</label>
    <label className='sub-label'>
    for their career prep</label>
    </div>  
</div>
</div>
<div className='side-bar'>
<Sidebanner/>
</div>
    </div>
  )
}
