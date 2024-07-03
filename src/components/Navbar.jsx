import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='header' style={{display : 'flex', justifyContent : 'space-between', backgroundColor :'blue'}}>
   <div className="left" style={{display : 'flex', marginLeft : '20px'}}>
    <h2>Logo</h2>
    <h2 style={{marginLeft : '20px'}}>Home</h2>
    <h2 style={{marginLeft : '20px'}}>Blogs</h2>
    </div>
    <div className="rig" style={{display : 'flex', marginLeft : '20px'}}>
    <input type="search" name="searchbox" id="search1" placeholder='Search here' style={{height : '30px',width : '250px', marginTop:'15px', borderRadius:'15px'}}/>
    <button style={{height:'35px', width:'80px', margin:'13px', backgroundColor:'lightgreen', borderRadius:'15px'}}>Signup</button>
    </div>
    </div>
    </>
  )
}

export default Navbar