import React from 'react'
// import React, { useEffect } from 'react'
import AddNote from './AddNote'
// import { useNavigate } from 'react-router-dom';
import Default from './Default';


const Home = (props) => {

  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     <AddNote showAlert={showAlert} />
  //   }
  //   else {
  //     navigate('/login')
  //   }
  //   // eslint-disable-next-line
  // }, [])

  const { showAlert } = props

  return (
    <div>
      {!localStorage.getItem('token') ? <Default /> : <AddNote showAlert={showAlert} />}
    </div>
  )
}

export default Home
