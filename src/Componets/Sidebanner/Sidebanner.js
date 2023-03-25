import React from 'react'
import "./Sidebanner.css"

const Sidebanner = () => {
  return (
    <div className='card'>
        <div className='card-header'>
          <p className="heading" >Premium Victory Batch</p>
         <div className='sub-heading'>
          <div className='left-heading'>
         <s >  <h2 className='strike-text'><s>₹19,999</s></h2></s>
           <h1 className="new-rate">₹13,999</h1>
           </div>
         
          <div className='logo-img'>
          </div>
          </div>
        </div>
    <div className='checkboxes'>
    <input type="checkbox" id="check1"/>
    <label for ="check1" className='side-label'>100+ Hrs Live Content</label>
    <input type="checkbox" id="check2"/>
    <label for ="check2" className='side-label'>50+ Hrs Contest</label>
    <input type="checkbox" id="check3"/>
    <label for ="check3" className='side-label'>500+ Problems</label>
    <input type="checkbox" id="check4"/>
    <label for ="check4" className='side-label'>Includes an interview bootcamp and access to a mentor network</label>
    <input type="checkbox" id="check1"/>
    <label for ="check1" className='side-label'>Enjoy access to our content for one year (paid extensions available)</label>
    <input type="checkbox" id="check2"/>
    <label for ="check2" className='side-label'>Flexible payment options, including no-cost EMI, are available.</label>
    <div className='button-container'>
<button className='btn'>Join now &rarr;</button>
        </div>
        </div>
     
    </div>
  )
}

export default Sidebanner