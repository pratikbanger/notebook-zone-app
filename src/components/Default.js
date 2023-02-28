import { useState } from "react";
import React from 'react'
import Login from './Login';

const Default = () => {

    const [setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return (
        <div>
            <h4>To save or access your saved notes</h4>
            <h4 className='mb-5'>Login/SignUp to <strong>NoteBook Zone</strong></h4>
            <Login showAlert={showAlert} />
        </div>
    )
}

export default Default
