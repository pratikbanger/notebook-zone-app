import React from 'react'

function Alert(props) {
    
    return (
        <div className='mb-4' style={{height: '40px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong> {props.alert.msg} </strong>
        </div>}
        </div>
    )
}

export default Alert