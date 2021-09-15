import React from 'react'

function Alerts(props) {
    return (
        // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show" role=alert`}>
        //     <strong>{props.alert.msg}</strong>
        //     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        // </div>
        props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
      </div>
    )
}

export default Alerts
