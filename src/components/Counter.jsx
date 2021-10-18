import React from 'react'

export default function Counter(props) {
    return (
        <div className="container p-4 justify-content-center align-items-center">
           <p className="fs-1 fw-bold">{props.counter}</p> 
        </div>
    )
}
