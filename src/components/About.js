import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='container my-3 d-flex justify-content-center'>
      <div className="card" style={{width: "50rem"}}>
        <img src="https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2019/12/Blog-cover-10.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">About NoteBook Zone</h3>
            <p className="card-text">NoteBook Zone is a simple note taking application. You can simpily save notes on cloud and later access them on any device through your login ID and Password. You can add, delete, edit and modify note. All the changes are automatically synchronized across all your devices (logged in using same Live ID).</p>
            <Link href="/" className="btn btn-primary">Go to Home</Link>
          </div>
      </div>
    </div>
  )
}

export default About