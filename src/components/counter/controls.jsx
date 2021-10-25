import React from 'react'

export default function controls(props) {
    let counter = props.counter
    const setCounter = props.setCounter
    const increase = ()=>{
        counter++
        setCounter(counter)
    }
    const decrease = ()=>{
        if(counter<=0){
            counter =0
        }else{
            counter--
        }
        setCounter(counter)
    }
    return (
        <div className="container mx-auto">
            <div className="btn btn-success m-2 fs-5 px-3 fw-bold" onClick={increase}>+ Increase</div>
            <div className="btn btn-danger m-2 fs-5 px-3 fw-bold" onClick={decrease}>- Decrease</div>
        </div>
    )
}
