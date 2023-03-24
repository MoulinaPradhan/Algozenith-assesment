import React from 'react'
import "./Sidebanner.css"

const Sidebanner = () => {
  return (
    <div className='card'>
        <div className='card-header'>
          <p>Premium Victory Batch</p>
          <h2><s>₹19,999</s></h2>
          <h3>₹13,999</h3>
          <div className='logo'></div>
        </div>
    <div className='checkboxes'>
    <input type="checkbox" id="check1"/>
    <label for ="check1">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check2"/>
    <label for ="check2">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check3"/>
    <label for ="check3">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check4"/>
    <label for ="check4">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check1"/>
    <label for ="check1">Lorem ipsum dolor sit amet</label>
    <input type="checkbox" id="check2"/>
    <label for ="check2">Lorem ipsum dolor sit amet</label>
    <div className='button-container'>
<button className='btn'>Join now &rarr;</button>
        </div>
        </div>
     
    </div>
  )
}

export default Sidebanner