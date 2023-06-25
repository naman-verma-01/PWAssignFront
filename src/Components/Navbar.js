import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Navbar() {
  const [open, setOpen] = useState(false)
  const [openIntern, setOpenIntern] = useState(false)


 
    
  setTimeout(() => {
    setOpen(true)
  }, 12000)
  return (
    <div id='navbar'>
      <p style={{ fontWeight: 'bolder', fontSize: "24px", marginTop: '8px', marginLeft: '18px' }}>InternBrand</p>
      <Popup open={open} position="bottom" trigger={<p className='midNavLink' style={{ color: '#6938EF', fontWeight: 'bolder',cursor:'pointer' }}>Our Best Intern</p>}>
        <div className="modalPopup">
          {!openIntern ?
            <div style={{marginTop:'20px'}}>Do you want to see the best intern we have??<br /> Click the button below. <br /><br />
            
            <div style={{display:'flex',justifyContent:'center', marginBottom:'20px'}}><button className='checkOutIntern' onClick={() => { setOpenIntern(true) }}>Check out</button></div>
            </div> :
            <>
              <div className="header" style={{marginTop:'20px',color:''}}> One of Our Best Intern! </div>

              <div id='profilePage'>
                <div style={{display:'flex'}}>
                <div id='profileData'>
                  <p><b>Name:</b> Naman Verma</p><br />
                  <p><b>Total Work Exp.:</b> 1.5+ Yrs </p><br />
                  <p><b>Email Id:</b> namanvermaca@gmail.com</p><br />
                  <p><b>LinkedIn:</b> <a href='https://www.linkedin.com/in/naman-verma-92695b218/'>Link</a></p><br />
                  <p><b>Portfolio Website:</b> <a style={{}} href='https://naman-verma.vercel.app/'>Portfolio Link</a></p>
                </div>
                <div id='profileImage'><img src='./images/naman.jpg' /></div>
                </div>
                
                <div style={{display:'flex',justifyContent:'center', marginTop:'20px'}}><button className='closeIntern' onClick={() => { setOpenIntern(false) }}>Close</button></div>

              </div>

            </>

          }

        </div>
      </Popup>
      <div id='midNav'>
        <div className='midNavLink'><img src='./images/clipboard.jpg' /><p>Browse Listing</p></div>
        <div className='midNavLink'><img src='./images/checklist.jpg' /><p>Application History</p></div>
        <div className='midNavLink'><img src='./images/edit.jpg' /><p>Blog</p></div>
        <div className='midNavLink'><img src='./images/query.jpg' /><p>Contact Us</p></div>
      </div>
      <div >
        <div className='midNavLink'><img src='./images/bell.jpg' /><img style={{ paddingLeft: '20px' }} height='50px' src='./images/dp.png' /></div>
      </div>




    </div>
  )
}

export default Navbar