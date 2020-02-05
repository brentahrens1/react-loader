import React from 'react'
import SpinnerIcon from './SpinnerIcon'
import './Spinner.css'

const Spinner = props => {
    const styled = props.overlay ? {
        background: 'rgba(0,0,0,.5)', 
        height: '100vh',
        width: '100vw',
        position: 'fixed'
    } : null
    return (
        <div className="Spinner" style={styled}> 
            <SpinnerIcon />
        </div>
    )
}

export default Spinner