import React, { useEffect } from 'react'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom';
import Default from './Default';


const Home = (props) => {

  let navigate = useNavigate();

  const { showAlert } = props

  useEffect(() => {
    if (localStorage.getItem('token')) {
      <AddNote showAlert={showAlert} />
      navigate('/')
    }
    else {
      <Default showAlert={showAlert} />
    }
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      {!localStorage.getItem('token') ? <Default /> : <AddNote showAlert={showAlert} />}
    </div>
  )
}

export default Home
