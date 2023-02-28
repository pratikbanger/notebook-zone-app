// import React, { useContext, useEffect } from 'react'
import React from 'react'

const About = () => {
  return (
    <div className='container my-3 d-flex justify-content-center'>
      <div className="card" style={{width: "50rem"}}>
        <img src="https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2019/12/Blog-cover-10.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">About iNoteBook Web-App</h3>
            <p className="card-text">iNoteBook is a simple note taking application. You have list of text notes on the left, and selected note text on the right. You can add, delete, edit and change note colors. All the changes are automatically synchronized across all your devices (logged in using same Live ID).</p>
            <a href="#" className="btn btn-primary">Go to Home</a>
          </div>
      </div>
    </div>
  )
}

export default About