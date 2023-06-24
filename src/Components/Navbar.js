import React from 'react'

function Navbar() {
  return (
    <div id='navbar'>
      <p style={{ fontWeight: 'bolder', fontSize: "24px", marginTop:'8px',marginLeft:'18px' }}>InternBrand</p>
      <div id='midNav'>
        <div className='midNavLink'><img src='./images/clipboard.jpg' /><p>Browse Listing</p></div>
        <div className='midNavLink'><img src='./images/checklist.jpg' /><p>Application History</p></div>
        <div className='midNavLink'><img src='./images/edit.jpg' /><p>Blog</p></div>
        <div className='midNavLink'><img src='./images/query.jpg' /><p>Contact Us</p></div>
      </div>
      <div >
        <div className='midNavLink'><img src='./images/bell.jpg' /><img style={{paddingLeft:'20px'}} height='50px' src='./images/dp.png'/></div>
      </div>
    </div>
  )
}

export default Navbar